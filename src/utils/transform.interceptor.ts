import {
  Injectable,
  NestInterceptor,
  CallHandler,
  ExecutionContext,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        console.log(data);
        console.log({
          data: data[1],
          code: data[0],
          msg: data[2] || '成功',
        });
        return {
          data: data[1],
          code: data[0],
          msg: data[2],
        };
      }),
    );
  }
}
