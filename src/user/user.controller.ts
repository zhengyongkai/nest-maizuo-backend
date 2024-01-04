import {
  Controller,
  Get,
  Post,
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
      const data = await this.appService.getOne(req.user.uid);
      if (data) {
        return [0, data, true];
      } else {
        return [401, null, '登录状态已经过期'];
      }
    } else {
      return [401, null, '登录状态已经过期'];
    }
  }
}
