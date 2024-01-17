import { Injectable } from '@nestjs/common';
import { Order } from './order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderResitory: Repository<Order>,
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
    return raw.insertId;
  }

  async getOrderItem(userId, oNum) {
    const orders = await this.orderResitory.findOne({
      where: { userId, oNum },
    });
    return orders;
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
