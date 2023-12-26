import { Test, TestingModule } from '@nestjs/testing';
import { CouponUserService } from './coupon-user.service';

describe('CouponUserService', () => {
  let service: CouponUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CouponUserService],
    }).compile();

    service = module.get<CouponUserService>(CouponUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
