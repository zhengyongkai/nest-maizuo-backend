import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { OrderController } from './user/order/order.controller';
import { OrderService } from './user/order/order.service';
import { OrderModule } from './user/order/order.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { join } from 'path';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/auth';
import { UserCouponModule } from './user/user-coupon/user-coupon.module';

@Module({
  imports: [
    HttpModule,
    OrderModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'maizuo',
      entities: [join(__dirname, '**', '*.entity.{js,ts}')],
      // synchronize: true,
    }),
    UserModule,
    UserCouponModule,
  ],
  controllers: [AppController, OrderController],
  providers: [AppService],
})
export class AppModule {}
