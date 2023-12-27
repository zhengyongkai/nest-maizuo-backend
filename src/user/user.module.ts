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
import { UserOrderController } from './user-order/user-order.controller';
import { UserOrderService } from './user-order/user-order.service';
import { UserOrderModule } from './user-order/user-order.module';
import { SeatModule } from './seat/seat.module';
import { OrderModule } from './order/order.module';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';
import { Order } from './order/order.entity';
import { SeatController } from './seat/seat.controller';
import { SeatService } from './seat/seat.service';
import { Seat } from './seat/seat.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, UserCoupon, Coupon, Order, Seat]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    UserCouponModule,
    CouponModule,
    UserOrderModule,
    OrderModule,
    SeatModule,
  ],
  controllers: [
    UserController,
    UserCouponController,
    CouponController,
    UserOrderController,
    OrderController,
    SeatController,
  ],
  providers: [
    UsersService,
    JwtService,
    UserCouponService,
    CouponService,
    UserOrderService,
    OrderService,
    SeatService,
  ],
  exports: [UsersService],
})
export class UserModule {}
