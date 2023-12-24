import { Injectable } from '@nestjs/common';
import { Coupon } from './coupon.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CouponService {
  constructor(
    @InjectRepository(Coupon)
    private couponRepository: Repository<Coupon>,
  ) {}

  async getOne(couponId: number): Promise<Array<Coupon>> {
    const user = await this.couponRepository.find({
      where: { couponId },
    });
    return user;
  }
}
