import {
  Body,
  Controller,
  Get,
  UseGuards,
  Request,
  Post,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { AuthGuard } from 'src/utils/user.guard';
import { Order } from './order.entity';
import { SeatService } from 'src/user/seat/seat.service';

@Controller('order')
export class OrderController {
  constructor(private readonly appService: OrderService) {}

  @UseGuards(AuthGuard)
  @Get('/getOrderByUserId')
  getOrderByUserId(@Request() req) {
    if (req.user) {
      return this.appService.getOrderByUserId(req.user.uid);
    }
  }

  @UseGuards(AuthGuard)
  @Post('/addOrder')
  addOrder(@Body() createOrderDto: Order) {
    console.log(createOrderDto);
    return this.appService.addOrder(createOrderDto);
  }
}
