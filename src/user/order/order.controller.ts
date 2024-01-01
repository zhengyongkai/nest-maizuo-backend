import {
  Body,
  Controller,
  Get,
  UseGuards,
  Request,
  Post,
  Param,
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

@Controller('order')
export class OrderController {
  sdk;
  constructor(
    private readonly appService: OrderService,
    private readonly seatService: SeatService,
    private readonly dictService: DictService,
    private readonly httpSerivce: HttpService,
  ) {
    this.sdk = new AlipaySdk({
      appId: '9021000132662671',
      privateKey:
        'MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCTO6OltkxxK+S4nT9AT6P3pOToBUCE/fDo5SK2SYNwyDT4f8GZgRPl4Bo0Wgi7xPLJNJeWYJ2DugzW64PB5JPA+fkbRIsQvzPRxN6SEvbcdefTsmUeR68z50+wuHpgwRH0KC5OL+0P2O4NfdUj5dMrJa1kGeW/jXL/cMnzOTRWr8mJWb9HZPb+5B3zxhopbF92yWwkDuxGNHjMLqFmTIkw2jLToubt13azrlewG+bS5lzM3O7IsoDrHBylnMNhMDN9JWvr31R55bqZaUga+lt/Z9yil0VKhm7TSZzmc3LuVnoCohmXeymQrCWfMlautYoiiR0aIxtzxWr/3tIARkOjAgMBAAECggEBAIVUy/TkasNOAZnh5QbDWHSKYjVvlCcbpI/z+QRk/GAlHjsvzs3JY5CX6oMgSappR4hIVUJ8CgjhcoEq1K3A5sEqXpl/8APhcvbzNq/H9sBdEezXL9VFC3eQcM1TspduIGkf/hcWNbNVOvcCzgLtPNdlDmmJPlLCsLJ8nJXjZu9cZfl5hBZjaHXakpOpefeEF/ymcOsMb/d0M2HOnvadmSuqsfsKdt8kYGuM5JiNIYqm4WD9ZEoFd82PphECPs2MVgunPDBUFR0xyHWU/uYKKMALIV+IiJ5gpM5eINnKx4UgM7FySEmkLmzrLeMTwL99yfMakJpG7KnX1fsXrVAfzCECgYEA9rsaSyzMGpVhoS0RO/rleKOFzYD2j6hM4cSAaDLl91y1MUuE9FnTLLpIL7txuX8YtNCVGCIcckdE/yBq7TBbTkSZIDsOHthpYneg1pz3ROf/7q+GWpJNJSKfj5ZoDeGG/LdBieCg8VNpcSH3negRw0dF0WQMqeHFxi6q7IuBJbMCgYEAmMOhW7Led9NEZcIudAXk0ikYkrifRQ2E64syu/H+PZ/U1l9OKw94sJVTQzBk/0ydg3E8qldMCwv4Qvim5F641W8DUnpH59T3p6UVPhfBuihBziXRmUyKjp6H3ehzFbeXLG+Jf1Gw4ijILFZ4WVtOL+K1w3VIv1+Sb6q9smlSUlECgYBgdenjthHd2sUelFYGkyKftZ6cJ2094Nid84sYMb4CpXYZXaMPPQb4l6OdNbVShkQMfPetRbjFXOO2st/a92rbAKq1FSGCIa2h149EGH37rJA8qtbmFgifGhgztOPdeWyi5Kp00yNY9fllR5hdXduD8xtyr6Db0e7WemxMqoXFTQKBgDWTvx7TD/VEkmOCBBrLCmKu6SBkQe/M+wZFTqjeCYYBbXs198tgZLrB1G7nJTTo4QF9kIJJlbD2JL8QSDAmDHtGsQqXOmrTpXwViOq7GEW64sFzQByc3KeCcDJi2SIPvqRmBfoyY3AeT35FYXYtcLGYuJjxpG8CDPC/GELfb3DRAoGANvPh/u3hCNZ7XLsLbstQ4vxMCOkLwB3sv1bcpOygm150HNK5YzT+DfDoHH9Ts03kAwU0EBjWseoQcQ0j79ZVUS8ior6F5JArugBlPk52qhkUdcJR+wRsFHV/PL6SeWDTbZC0IEk24CN2+6aSplyuNypUnsnFQMukbQALanTsBMc=',
      alipayPublicKey:
        'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmaj5w48DGoL/RKmfWqD+GcBgO+v6hBPNKKBcq86HDeb4C+JYk596s5eN9ohk0uYeDrQ4cKW4ceQts3rl1q/fhhqjFMonhoAacIQiiPT4c8yPsIo2W53g1WB18aXmUwqn19sl/7DmyIYIlsQn+7jNxQZuXU3xXfXvoNufzpzacs+hqSZc9u4mia7CVnO8VjVL3GyFtDOlMphFIKXd91itv3seq5JLC6DL2m2p+snKcycoX4oiDHAyEfviYhfGuS2N+O11iKyeKU4ZzziQL+1WXjQHIz3XjILn0113H9LS8MRb/IEDcVm9muxe0GTslOgBjxtF+16p4kH1VGWEnH/jmQIDAQAB',
      gateway: 'https://openapi-sandbox.dl.alipaydev.com/gateway.do',
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
    return {
      status: 0,
      data: order,
      msg: '成功',
    };
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
      return {
        status: 0,
        data: order,
        msg: '成功',
      };
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
      return {
        status: 0,
        data: id,
        msg: '成功',
      };
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
      console.log(params);
      const result = await this.sdk.pageExec('alipay.trade.wap.pay', {
        bizContent: {
          out_trade_no: oNum,
          total_amount: price,
          subject: subject,
          product_code: 'QUICK_WAP_WAY',
          seller_id: '2088721023738540',
          goods_detail: [orderId],
        },
        return_url: 'http://localhost:5173/#/orderquery',
      });
      return {
        status: 0,
        data: result,
        msg: '成功',
      };
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
      console.log(order, out_trade_no);
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
          return {
            status: 0,
            data: '支付成功',
            msg: '成功',
          };
          // this.appService.changeOrderStatus();
        } else {
          return {
            status: 500,
            data: '支付失败',
            msg: '支付失败，请联系客服！',
          };
        }
      }

      return {
        status: 500,
        data: '支付失败',
        msg: '订单不存在！',
      };
    }
  }
}
