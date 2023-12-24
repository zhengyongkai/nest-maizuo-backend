import { Entity, Column, PrimaryColumn, OneToMany, OneToOne } from 'typeorm';
import { Exclude } from 'class-transformer';
import { ClassSerializerInterceptor, UseInterceptors } from '@nestjs/common';
import { Coupon } from '../coupon/coupon.entity';

@Entity('user_coupon')
@UseInterceptors(ClassSerializerInterceptor)
export class UserCoupon {
  constructor(partial: Partial<UserCoupon>) {
    Object.assign(this, partial);
  }
  @PrimaryColumn({
    name: 'id',
  })
  id: number;

  @Column({
    name: 'uid',
  })
  uid: number;

  @Column({
    name: 'couponId',
  })
  couponId: number;

  @OneToOne(() => Coupon, (process) => process.couponId)
  couponList: Coupon;
}
