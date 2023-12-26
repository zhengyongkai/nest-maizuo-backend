/*
 * @Author: 郑永楷
 * @LastEditors: 郑永楷
 * @Description: file content
 */
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('user_coupon')
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
}
