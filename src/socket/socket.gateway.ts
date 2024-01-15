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
import { CreateSocketDto } from './dto/create-socket.dto';
import { UpdateSocketDto } from './dto/update-socket.dto';
// import { Socket } from 'dgram';
import { Server, Socket } from 'socket.io';
import { SocketGuard } from './socket.guard';
import { UseGuards } from '@nestjs/common';
import { jwtConstants } from 'src/constants/auth';
import { JwtService } from '@nestjs/jwt';
import { helloMessage, messageMap, robotMessage } from './robot';

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
  toServer(client: Socket, data: any) {
    console.log(data, messageMap.get(data));
    if (!data) {
      client.emit('message', helloMessage);
      client.emit('message', robotMessage);
    } else if (messageMap.get(data)) {
      client.emit('message', messageMap.get(data));
    }
  }
}
