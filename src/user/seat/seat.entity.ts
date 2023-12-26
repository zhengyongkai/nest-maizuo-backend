import { Entity, Column, PrimaryColumn } from 'typeorm';
import { ClassSerializerInterceptor, UseInterceptors } from '@nestjs/common';

@Entity('seat')
@UseInterceptors(ClassSerializerInterceptor)
export class Seat {
  constructor(partial: Partial<Seat>) {
    Object.assign(this, partial);
  }
  @PrimaryColumn({
    name: 'seatId',
  })
  seatId: number;

  @Column({
    name: 'orderId',
  })
  orderId: string;

  @Column({
    name: 'columnId',
  })
  columnId: string;
  @Column({
    name: 'columnNum',
  })
  columnNum: string;
  @Column({
    name: 'rowId',
  })
  rowId: string;
  @Column({
    name: 'rowNum',
  })
  rowNum: string;
  @Column({
    name: 'sectionId',
  })
  sectionId: string;

  @Column({
    name: 'sectionName',
  })
  sectionName: string;
}
