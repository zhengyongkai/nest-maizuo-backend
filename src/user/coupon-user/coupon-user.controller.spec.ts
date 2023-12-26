import { Test, TestingModule } from '@nestjs/testing';
import { CouponUserController } from './coupon-user.controller';

describe('CouponUserController', () => {
  let controller: CouponUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CouponUserController],
    }).compile();

    controller = module.get<CouponUserController>(CouponUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
