import { Module } from '@nestjs/common';
import { Order } from './order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { SeatModule } from 'src/user/seat/seat.module';
import { Seat } from 'src/user/seat/seat.entity';
import { SeatService } from '../seat/seat.service';
import { SeatController } from '../seat/seat.controller';
import { DictModule } from '../dict/dict.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order]),
    SeatModule,
    DictModule,
    HttpModule,
  ],
  controllers: [OrderController],
  exports: [OrderService],
  providers: [OrderService],
})
export class OrderModule {}
