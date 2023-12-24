import { Module } from '@nestjs/common';
import { CouponService } from './coupon.service';
import { CouponController } from './coupon.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coupon } from './coupon.entity';

@Module({
  providers: [CouponService],
  controllers: [CouponController],
  exports: [CouponService],
  imports: [TypeOrmModule.forFeature([Coupon])],
})
export class CouponModule {}
