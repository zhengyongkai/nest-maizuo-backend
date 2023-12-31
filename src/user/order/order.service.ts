import { Injectable } from '@nestjs/common';
import { Order } from './order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { Seat } from 'src/user/seat/seat.entity';
import { SeatService } from '../seat/seat.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderResitory: Repository<Order>,
    private seatResitory: SeatService,
  ) {}

  async getOrderByUserId(userId: number): Promise<Order[]> {
    const orders = await this.orderResitory.find({
      where: { userId },
      order: { createDate: 'DESC' },
    });
    return orders;
  }

  async addOrder(params): Promise<any> {
    const { raw } = await this.orderResitory.insert(params);

    console.log(raw.insertId);
    return raw.insertId;
  }

  async getOrderById(orderId) {
    const orders = await this.orderResitory.findOne({
      where: { orderId },
    });
    return orders;
  }

  async getOrderByONum(oNum) {
    const orders = await this.orderResitory.findOne({
      where: { oNum },
    });
    return orders;
  }

  async changeOrderStatus(orderId, params) {
    const order = await this.orderResitory.update(
      {
        orderId,
      },
      params,
    );
    return order;
  }
}
