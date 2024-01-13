/*
 * @Author: 郑永楷
 * @LastEditors: 郑永楷
 * @Description: file content
 */
import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from '../constants/auth';
import { Request } from 'express';

@Injectable()
export class SocketGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    console.log('good');
    const request = context.switchToWs().getClient();

    const token = this.extractTokenFromHeader(request) as string;
    // console.log('token', token);
    if (!token) {
      request.disconnect();
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstants.secret,
      });
      console.log(request['handshake']['query']);
      request['handshake']['query']['user'] = payload.uid;
    } catch {
      request.disconnect();
      console.log('失效');
    }

    return true;
  }

  private extractTokenFromHeader(request: Request) {
    const token = request['handshake']['query']['token'];

    return token;
  }
}
