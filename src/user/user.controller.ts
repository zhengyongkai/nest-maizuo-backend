import {
  Controller,
  ExecutionContext,
  Get,
  Post,
  Query,
  Param,
  UnauthorizedException,
  Request,
  UseGuards,
  Body,
} from '@nestjs/common';
import { UsersService } from './user.service';
import { AuthGuard } from '../utils/user.guard';

@Controller('user')
export class UserController {
  constructor(private readonly appService: UsersService) {}
  @Post('/login')
  getOne(@Body('userId') userid: string, @Body('password') password: string) {
    return this.appService.signIn(userid, password);
  }

  @UseGuards(AuthGuard)
  @Get('/getInfo')
  async getInfo(@Request() req) {
    if (req.user) {
      console.log(req.user);
      const data = await this.appService.getOne(req.user.uid);
      if (data) {
        return {
          status: 0,
          data: data,
          msg: '成功',
        };
      } else {
        return {
          status: 401,
          msg: '登录状态已经过期',
        };
      }
    } else {
      return {
        status: 401,
        msg: '登录状态已经过期',
      };
    }
  }
}
