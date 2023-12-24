import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';
import { OrderModule } from './order/order.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { join } from 'path';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/auth';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { UserCouponModule } from './user/user-coupon/user-coupon.module';

@Module({
  imports: [
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
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
