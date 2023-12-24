import { Module } from '@nestjs/common';
import { UsersService } from '../user.service';
import { UserCouponService } from './user-coupon.service';
import { UserCouponController } from './user-coupon.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCoupon } from './user-coupon.entity';
import { CouponService } from '../coupon/coupon.service';
import { CouponModule } from '../coupon/coupon.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserCoupon]), CouponModule],
  exports: [UserCouponService],
  providers: [UserCouponService],
  controllers: [UserCouponController],
})
export class UserCouponModule {}
