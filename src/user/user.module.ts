/*
 * @Author: 郑永楷
 * @LastEditors: 郑永楷
 * @Description: file content
 */
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UsersService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from 'src/constants/auth';
import { UserCouponController } from './user-coupon/user-coupon.controller';
import { UserCouponService } from './user-coupon/user-coupon.service';
import { UserCouponModule } from './user-coupon/user-coupon.module';
import { UserCoupon } from './user-coupon/user-coupon.entity';
import { CouponController } from './coupon/coupon.controller';
import { CouponService } from './coupon/coupon.service';
import { CouponModule } from './coupon/coupon.module';
import { Coupon } from './coupon/coupon.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, UserCoupon, Coupon]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    UserCouponModule,
    CouponModule,
  ],
  controllers: [UserController, UserCouponController, CouponController],
  providers: [UsersService, JwtService, UserCouponService, CouponService],
  exports: [UsersService],
})
export class UserModule {}
