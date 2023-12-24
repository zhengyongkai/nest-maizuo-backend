import { Test, TestingModule } from '@nestjs/testing';
import { UserCouponController } from './user-coupon.controller';

describe('UserCouponController', () => {
  let controller: UserCouponController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserCouponController],
    }).compile();

    controller = module.get<UserCouponController>(UserCouponController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
