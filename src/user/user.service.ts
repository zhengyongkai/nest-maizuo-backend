/*
 * @Author: 郑永楷
 * @LastEditors: 郑永楷
 * @Description: file content
 */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from 'src/constants/auth';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async getOne(userId: string): Promise<User> {
    const user = await this.usersRepository.findOne({
      where: { userId },
    });
    console.log(user, userId);
    return user;
  }

  async signIn(userId: string, password: string) {
    const user = await this.usersRepository.findOne({
      where: { userId: userId },
    });

    if (user) {
      const payload = { userId, password };
      console.log(userId, password);
      if (password === user.password) {
        const user = await this.getOne(userId);
        return {
          status: 0,
          data: {
            ...user,
            token: await this.jwtService.signAsync(payload, {
              secret: jwtConstants.secret,
            }),
          },
          msg: '成功',
        };
      } else {
        return {
          status: 500,
          msg: '密码错误',
        };
      }
    } else {
      return {
        status: 500,
        msg: '账号不存在',
      };
    }
  }
}