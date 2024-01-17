import { Module } from '@nestjs/common';
import { SocketService } from './socket.service';
import { SocketGateway } from './socket.gateway';
import { OrderModule } from 'src/user/order/order.module';
import { DictModule } from 'src/user/dict/dict.module';

@Module({
  providers: [SocketGateway, SocketService],
  imports: [OrderModule, DictModule],
})
export class SocketModule {}
