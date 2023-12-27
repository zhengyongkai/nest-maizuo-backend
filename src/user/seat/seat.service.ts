import { Injectable } from '@nestjs/common';
import { Seat } from './seat.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';

@Injectable()
export class SeatService {
  constructor(
    @InjectRepository(Seat)
    private seatResitory: Repository<Seat>,
  ) {}

  async addSeat(params: Seat[]): Promise<InsertResult> {
    const { raw } = await this.seatResitory.insert(params);
    return raw;
  }

  async getSeatByOrderId(orderId: number) {
    const data = await this.seatResitory.find({
      where: { orderId },
    });
    return data;
  }
}
