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
    console.log(data);
    // console.log(client);
    if (!data) {
      client.emit('message', {
        type: 'selected',
        title: '欢迎使用,输入票号可以直接查询当前订单',
        date: new Date(),
        from: '机器人',
        fromId: -1,
        data: [
          {
            title: '怎么使用React-MAIZUO的App',
            url: '',
          },
          {
            title: '有疑问？',
            url: '',
          },
        ],
      });

      client.emit('message', {
        type: 'text',
        title:
          '您好，您可以用微信扫一扫，扫描一下卡片背面的兑票二维码或者微信关注公众号“卖座网”--点击“用户中心”--“我的订单”--“卖座券”-- 添加新的卖座券 -- 输入卡号密码进行查询即可，感谢您对卖座网的理解与支持，祝您生活愉快。',
        date: new Date(),
        from: '机器人',
        fromId: -1,
      });
    } else if (data === '怎么使用React-MAIZUO的App') {
      client.emit('message', {
        type: 'text',
        title: '直接使用即可',
        date: new Date(),
        from: '机器人',
        fromId: -1,
      });
    }
  }
}
