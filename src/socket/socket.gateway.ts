import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { SocketService } from './socket.service';
import { CreateSocketDto } from './dto/create-socket.dto';
import { UpdateSocketDto } from './dto/update-socket.dto';
import { Socket } from 'dgram';
@WebSocketGateway(3001, {
  allowEIO3: true, //协议前后端版本要一致
  //后端解决跨域
  cors: {
    origin: 'http://localhost:5173', //这里不要写*，要写具体，否则会出现跨域问题
    credentials: true,
  },
})
export class SocketGateway {
  constructor(private readonly socketService: SocketService) {}
  msgList: string[] = [];

  //接收并处理来自客户端的消息
  @SubscribeMessage('toServer')
  toServer(client: Socket, data: string) {
    console.log(data);
    client.emit('toServer', '这是一条发送给客户端的消息');
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
