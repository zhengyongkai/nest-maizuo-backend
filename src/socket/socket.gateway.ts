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

@WebSocketGateway(3001, {
  allowEIO3: true, //协议前后端版本要一致
  //后端解决跨域
  cors: {
    origin: 'http://localhost:5173', //这里不要写*，要写具体，否则会出现跨域问题
    credentials: true,
  },
})
@UseGuards(SocketGuard)
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  msgList: string[] = [];
  rooms: string[] = [];

  constructor(private readonly socketService: SocketService) {}

  handleDisconnect() {
    console.error('断开了链接');
  }

  handleConnection(socket: Socket) {
    console.log('有人链接进来了', socket.handshake.query['user']);
    // this.joinRoom(socket);
  }

  @SubscribeMessage('join')
  joinRoom(client: Socket) {
    // console.log(client);
    this.rooms.push(client.handshake.query['user'] as string);
    // console.log('房间有', this.rooms);
    console.log('进入房间', this.rooms);
    client.emit('message', []);
  }

  @SubscribeMessage('hello')
  toServer(client: Socket, data: string) {
    // console.log(client);
    client.emit('message', '这是一条发送给客户端的消息');
  }
  //以下代码本文不会介绍
  @SubscribeMessage('createSocket')
  create(@MessageBody() createSocketDto: CreateSocketDto) {
    return this.socketService.create(createSocketDto);
  }

  @SubscribeMessage('findAllSocket')
  findAll() {
    return this.socketService.findAll();
  }

  @SubscribeMessage('findOneSocket')
  findOne(@MessageBody() id: number) {
    return this.socketService.findOne(id);
  }

  @SubscribeMessage('updateSocket')
  update(@MessageBody() updateSocketDto: UpdateSocketDto) {
    return this.socketService.update(updateSocketDto.id, updateSocketDto);
  }

  @SubscribeMessage('removeSocket')
  remove(@MessageBody() id: number) {
    return this.socketService.remove(id);
  }
}
