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
import { Socket } from 'socket.io';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request) as string;
    if (!token) {
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          error: '登录状态已经过期',
        },
        HttpStatus.OK,
      );
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstants.secret,
      });
      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlers
      // console.log(payload);
      request['user'] = payload;
    } catch {
      // console.log('err');
      request['user'] = null;
    }
    return true;
  }

  private extractTokenFromHeader(request: Request) {
    // console.log(request);
    const token = request.headers['x-token'];

    return token;
  }
}
