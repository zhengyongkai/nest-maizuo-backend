/*
 * @Author: 郑永楷
 * @LastEditors: 郑永楷
 * @Description: file content
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserCoupon } from './coupon-user.entity';
import { Repository } from 'typeorm';
// import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CouponUserService {
  constructor(
    @InjectRepository(UserCoupon)
    private userCouponRepository: Repository<UserCoupon>,
  ) {}

  async getOne(uid: number): Promise<Array<UserCoupon>> {
    const userCoupon = await this.userCouponRepository.find({
      where: { uid },
    });
    return userCoupon;
  }
}
