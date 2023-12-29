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

@Controller('order')
export class OrderController {
  constructor(
    private readonly appService: OrderService,
    private readonly seatService: SeatService,
    private readonly dictService: DictService,
  ) {}

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
      createOrderDto.createDate = new Date().getTime().toString();
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
}
