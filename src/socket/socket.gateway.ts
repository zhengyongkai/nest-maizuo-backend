import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
} from '@nestjs/websockets';
import { SocketService } from './socket.service';
// import { Socket } from 'dgram';
import { Server, Socket } from 'socket.io';
import { SocketGuard } from './socket.guard';
import { UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { getAutoMessage, getEmptyMessage, getOrderMessage, map } from './robot';
import { OrderService } from 'src/user/order/order.service';
import { DictService } from 'src/user/dict/dict.service';

@WebSocketGateway(3001, {
  allowEIO3: true, //协议前后端版本要一致
  //后端解决跨域
  namespace: 'socket',
  cors: {
    origin: '*', //这里不要写*，要写具体，否则会出现跨域问题
    credentials: true,
  },
})
@UseGuards(SocketGuard)
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  msgList: string[] = [];
  rooms: Map<string, Socket> = new Map();

  constructor(
    private readonly socketService: SocketService,
    private jwtService: JwtService,
    private orderService: OrderService,
    private dictService: DictService,
  ) {}

  // 断开连接的时候 将 rooms 中用户 注销点
  async handleDisconnect(client: Socket) {
    const token = client.handshake.query['token'] as string;
    // 通过Token获取Id
    const id = await SocketGuard.verifyToken(this.jwtService, client, token);
    if (id) {
      this.rooms.delete(id);
    }
  }
  // 连接后进入房间
  async handleConnection(client: Socket) {
    const token = client.handshake.query['token'] as string;
    // 通过Token获取Id
    const id = await SocketGuard.verifyToken(this.jwtService, client, token);
    if (id) {
      this.rooms.set(id, client);
    }
  }

  @SubscribeMessage('robot')
  async toServer(client: Socket, data: string) {
    console.log(data);
    const user = client.handshake.query['user'];
    const key = data && data.split('+');
    if (!data) {
      client.emit('message', getAutoMessage('hello'));
    } else if (map.get(data)) {
      client.emit('message', getAutoMessage(data));
    } else if (key && key[0] === '单号' && key[1]) {
      const oNum = key[1];
      const order = await this.orderService.getOrderItem(user, oNum);
      if (order) {
        const statusName = await this.dictService.getOne(
          'order_status',
          order.status,
        );
        order.statusName = statusName.dictName;
      }
      client.emit('message', getOrderMessage(order));
    } else {
      client.emit('message', getEmptyMessage());
    }
  }
}
