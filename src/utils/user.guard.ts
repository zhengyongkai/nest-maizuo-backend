/*
 * @Author: 郑永楷
 * @LastEditors: 郑永楷
 * @Description: file content
 */
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from '../constants/auth';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<any> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request) as string;
    if (!token) {
      return {
        status: 401,
        data: '',
        msg: '授权已失效',
      };
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstants.secret,
      });
      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlers
      request['user'] = payload;
    } catch {
      request['user'] = null;
    }
    return true;
  }

  private extractTokenFromHeader(request: Request) {
    const token = request.headers['x-token'];

    return token;
  }
}
