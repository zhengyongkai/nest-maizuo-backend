import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import Mock from 'mockjs';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return Mock.mock('@integer(1,9999)');
  }
}
