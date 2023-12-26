import { Module } from '@nestjs/common';
import { CouponUserController } from './coupon-user.controller';
import { CouponService } from '../coupon/coupon.service';
import { CouponUserService } from './coupon-user.service';

@Module({
  controllers: [CouponUserController],
  providers: [CouponUserService], // 注意这里
  imports: [CouponUserModule],
})
export class CouponUserModule {}
