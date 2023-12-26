/*
 * @Author: 郑永楷
 * @LastEditors: 郑永楷
 * @Description: file content
 */
import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from 'src/utils/user.guard';
import { UsersService } from '../user.service';
import { CouponUserService } from './coupon-user.service';
import { CouponService } from '../coupon/coupon.service';

@Controller('coupon-user')
export class CouponUserController {
  constructor(
    private readonly couponUserService: CouponUserService,
    private readonly couponSerive: CouponService,
  ) {}
  @UseGuards(AuthGuard)
  @Get('/getCoupon')
  async getInfo(@Request() req) {
    if (req.user) {
      const usrCouponList = await this.couponUserService.getOne(
        req.user.userId,
      );
      const arr = [];
      usrCouponList.forEach(async (item) => {
        const coupon = await this.couponSerive.getOne(item.couponId);
        arr.push(coupon);
      });
      //   console.log(arr);

      return arr;

      //   console.log(req.user.userId);
    }
  }
}
