/*
 * @Author: 郑永楷
 * @LastEditors: 郑永楷
 * @Description: file content
 */
import { Entity, Column, PrimaryColumn } from 'typeorm';

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

  // 优惠减免
  @Column({
    name: 'remission',
  })
  remission: number;

  @Column({
    name: 'descption',
  })
  descption: string;

  @Column({
    name: 'tag',
  })
  tag: string;
  // 是否过期
  isExpia: boolean;
}
