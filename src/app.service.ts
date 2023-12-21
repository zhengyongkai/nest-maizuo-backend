import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  getHello(): string {
    return 'Hello World!';
  }
  findAll(): Observable<AxiosResponse> {
    return this.httpService.get(
      'https://www.fastmock.site/mock/c772435cd59f9f06ddcc0c6f1df8f398/maizuo/api/getRate',
    );
  }
}
