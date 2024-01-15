import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { OrderController } from './user/order/order.controller';
import { OrderModule } from './user/order/order.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

import { UserCouponModule } from './user/user-coupon/user-coupon.module';
import { SeatModule } from './user/seat/seat.module';
import { DictModule } from './user/dict/dict.module';
import { SocketModule } from './socket/socket.module';

import { ConfigModule, ConfigService } from '@nestjs/config';
import env from './env';
import { join } from 'path';

@Module({
  imports: [
    HttpModule,
    OrderModule,
    ConfigModule.forRoot({ isGlobal: true, load: [env] }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => {
        return {
          ...config.get('DATABASE'),
          entities: [join('./' + __dirname, '**', '*.entity.{js,ts}')],
        };
      },
      inject: [ConfigService],
    }),
    UserModule,
    UserCouponModule,
    OrderModule,
    SeatModule,
    DictModule,
    HttpModule,
    SocketModule,
  ],
  controllers: [AppController, OrderController],
  providers: [AppService],
})
export class AppModule {}
