import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '../user.guard';
import { UserCouponService } from './user-coupon.service';
import { CouponService } from '../coupon/coupon.service';

@Controller('user-coupon')
export class UserCouponController {
  constructor(
    private readonly appService: UserCouponService,
    private readonly couponSevice: CouponService,
  ) {}

  @UseGuards(AuthGuard)
  @Get('/getInfo')
  async getInfo(@Request() req) {
    const user = req.user;
    const date = new Date();
    if (user) {
      const couponUserList = await this.appService.getCouponUserById(
        req.user.uid,
      );
      const result = [];
      for (const couponUser of couponUserList) {
        const coupon = await this.couponSevice.getOne(couponUser.couponId);
        // console.log(date.getTime(), coupon.expiration);
        coupon.remission = coupon.remission * 100;
        if (date.getTime() < coupon.expiration * 1000) {
          coupon.isExpia = false;
        } else {
          coupon.isExpia = true;
        }
        // break;
        result.push(coupon);
      }
      return {
        status: 0,
        data: result,
        msg: '成功',
      };
    } else {
      return {
        status: 401,
        msg: '登录状态已经过期',
      };
    }
  }
}
