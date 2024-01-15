/*
 * @Author: 郑永楷
 * @LastEditors: 郑永楷
 * @Description: file content
 */
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from '../constants/auth';
import { Request } from 'express';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { Server, Socket } from 'socket.io';

@Injectable()
export class SocketGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  // 主要是 connect 方法不会触发 canActivate
  static async verifyToken(
    jwtService: JwtService,
    socket: Socket,
    token: string,
  ) {
    try {
      const payload = await jwtService.verifyAsync(token, {
        secret: jwtConstants.secret,
      });
      return payload.uid;
    } catch {
      socket.disconnect();
      console.log('socket 失效');
    }
    return null;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToWs().getClient();

    const token = this.extractTokenFromHeader(request) as string;
    // console.log('token', token);
    if (!token) {
      request.disconnect();
    }

    request['handshake']['query']['user'] = await SocketGuard.verifyToken(
      this.jwtService,
      request,
      token,
    );

    return true;
  }

  private extractTokenFromHeader(request: Request) {
    const token = request['handshake']['query']['token'];

    return token;
  }
}
