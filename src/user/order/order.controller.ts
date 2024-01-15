import {
  Body,
  Controller,
  Get,
  UseGuards,
  Request,
  Post,
  Query,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { AuthGuard } from 'src/utils/user.guard';
import { Order } from './order.entity';
import { SeatService } from '../seat/seat.service';
import { getUUid } from 'src/utils';
import { DictService } from '../dict/dict.service';
import * as dayjs from 'dayjs';

import AlipaySdk from 'alipay-sdk';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import {
  ALIPAYPUBLICKEY,
  APPID,
  GATEWAY,
  PRIVATEKEY,
  PRODUCTCODE,
  SELLERID,
} from 'src/constants/common';
import { ConfigService } from '@nestjs/config';

@Controller('order')
export class OrderController {
  sdk;
  constructor(
    private readonly appService: OrderService,
    private readonly seatService: SeatService,
    private readonly dictService: DictService,
    private readonly httpSerivce: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.sdk = new AlipaySdk({
      appId: APPID,
      privateKey: PRIVATEKEY,
      alipayPublicKey: ALIPAYPUBLICKEY,
      gateway: GATEWAY,
    });
  }

  @UseGuards(AuthGuard)
  @Get('/getOrderById')
  async getOrderById(@Query() queryParams: { orderId: number }) {
    const order = await this.appService.getOrderById(queryParams.orderId);
    const seats = await this.seatService.getSeatByOrderId(order.orderId);
    const dict = await this.dictService.getOne('order_status', order.status);
    order.seatList = seats;

    order.statusName = dict.dictName;
    return [0, order];
  }

  @UseGuards(AuthGuard)
  @Get('/getOrderByUserId')
  async getOrderByUserId(@Request() req) {
    if (req.user) {
      const order = await this.appService.getOrderByUserId(req.user.uid);
      for (const i of order) {
        i.seatList = await this.seatService.getSeatByOrderId(i.orderId);
        const dict = await this.dictService.getOne('order_status', i.status);
        i.statusName = dict.dictName;
      }
      return [0, order];
    }
  }

  @UseGuards(AuthGuard)
  @Post('/addOrder')
  async addOrder(@Request() req, @Body() createOrderDto: Order) {
    if (req.user) {
      createOrderDto.userId = req.user.uid;
      createOrderDto.createDate = dayjs().unix().toString();
      createOrderDto.oNum = getUUid();
      const id = await this.appService.addOrder(createOrderDto);
      createOrderDto.seatList.forEach((item) => {
        item.orderId = id;
      });
      await this.seatService.addSeat(createOrderDto.seatList);
      return [0, id];
    }
  }

  @UseGuards(AuthGuard)
  @Post('/payOrder')
  async payOrder(
    @Request() req,
    @Body()
    params: { oNum: string; price: number; subject: string; orderId: number },
  ) {
    if (req.user) {
      const { oNum, price, subject, orderId } = params;
      const order = await this.appService.getOrderByONum(oNum);
      // console.log(order.status);
      if (order.status === 2) {
        return [500, null, '订单已经过期'];
      }
      if (order.status === 1) {
        return [500, null, '订单已经提交'];
      }
      const result = await this.sdk.pageExec('alipay.trade.wap.pay', {
        bizContent: {
          out_trade_no: oNum,
          total_amount: price,
          subject: subject,
          product_code: PRODUCTCODE,
          seller_id: SELLERID,
          goods_detail: [orderId],
        },
        return_url: `${this.configService.get('APPLY_ORDER_URL')}${orderId}`,
      });
      return [0, result];
    }
  }

  @UseGuards(AuthGuard)
  @Post('/finishOrder')
  async finishOrder(
    @Request() req,
    @Body()
    params: { orderId: number; actualPrice: number },
  ) {
    const { orderId, actualPrice } = params;
    if (req.user) {
      await this.appService.changeOrderStatus(orderId, {
        actualPrice,
      });
      return [0, '提交成功'];
    }
  }

  @UseGuards(AuthGuard)
  @Post('/queryOrder')
  async queryOrder(
    @Request() req,
    @Body() params: { out_trade_no: string; trade_no: string },
  ) {
    if (req.user) {
      const { out_trade_no, trade_no } = params;
      const order = await this.appService.getOrderByONum(out_trade_no);
      // console.log(order, out_trade_no);
      if (order) {
        const result = await this.sdk.pageExec('alipay.trade.query', {
          bizContent: {
            out_trade_no,
            trade_no,
            goods_detail: [order.orderId],
          },

          method: 'get',
        });
        const { data } = await firstValueFrom(
          this.httpSerivce.get(result).pipe(),
        );
        const trade_time = dayjs().unix().toString();

        if (data.alipay_trade_query_response.trade_status === 'TRADE_SUCCESS') {
          await this.appService.changeOrderStatus(order.orderId, {
            status: 1,
            tradeNo: trade_no,
            tradeTime: trade_time,
          });
          return [0, '支付成功'];
          // this.appService.changeOrderStatus();
        } else {
          return [500, '支付失败', '支付失败，请联系客服！'];
        }
      }
      return [500, '支付失败', '订单不存在！'];
    }
  }
}
