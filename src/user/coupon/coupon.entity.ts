import { Entity, Column, PrimaryColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { ClassSerializerInterceptor, UseInterceptors } from '@nestjs/common';

@Entity('coupon')
@UseInterceptors(ClassSerializerInterceptor)
export class Coupon {
  constructor(partial: Partial<Coupon>) {
    Object.assign(this, partial);
  }
  @PrimaryColumn({
    name: 'couponId',
  })
  couponId: number;

  @Column({
    name: 'couponName',
  })
  couponName: number;

  @Column({
    name: 'expiration',
  })
  expiration: number;
}
