import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserCoupon } from './user-coupon.entity';
import { Repository } from 'typeorm';
import { CouponService } from '../coupon/coupon.service';

@Injectable()
export class UserCouponService {
  constructor(
    @InjectRepository(UserCoupon)
    private appRepository: Repository<UserCoupon>,
  ) {}

  async getCouponUserById(uid: number): Promise<Array<UserCoupon>> {
    const data = await this.appRepository.find({
      where: { uid },
    });
    return data;
  }
}
