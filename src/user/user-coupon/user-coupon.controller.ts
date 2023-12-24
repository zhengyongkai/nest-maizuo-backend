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
    if (user) {
      const couponUserList = await this.appService.getCouponUserById(
        req.user.uid,
      );
      const result = [];
      for (const couponUser of couponUserList) {
        const coupon = await this.couponSevice.getOne(couponUser.uid);
        // break;
        result.push(coupon);
      }
      return {
        status: 0,
        data: result,
        msg: '成功',
      };
    }
  }
}
