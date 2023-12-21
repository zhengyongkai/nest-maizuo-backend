import { Entity, Column, PrimaryColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { ClassSerializerInterceptor, UseInterceptors } from '@nestjs/common';

@Entity('user')
@UseInterceptors(ClassSerializerInterceptor)
export class User {
  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
  @PrimaryColumn({
    name: 'uid',
  })
  uid: number;

  @Column({
    name: 'userId',
  })
  userId: string;

  @Column({
    name: 'gender',
  })
  gender: number;

  @Column({
    name: 'mobile',
  })
  mobile: string;

  @Column({
    name: 'headIcon',
  })
  headIcon: string;

  @Column({
    name: 'birthday',
  })
  birthday: string;

  @Column({
    name: 'accountName',
  })
  accountName: string;

  @Column({
    name: 'nickName',
  })
  nickName: string;

  @Exclude()
  @Column({
    name: 'password',
  })
  password: string;
}
