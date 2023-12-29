/*
 * @Author: 郑永楷
 * @LastEditors: 郑永楷
 * @Description: file content
 */
import { Entity, Column, PrimaryColumn } from 'typeorm';

import { ClassSerializerInterceptor, UseInterceptors } from '@nestjs/common';

@Entity('dict')
@UseInterceptors(ClassSerializerInterceptor)
export class Dict {
  constructor(partial: Partial<Dict>) {
    Object.assign(this, partial);
  }
  @PrimaryColumn({
    name: 'id',
  })
  id: number;

  @Column({
    name: 'dictParam',
  })
  dictParam: string;

  @Column({
    name: 'dictName',
  })
  dictName: string;

  @Column({
    name: 'dictValue',
  })
  dictValue: number;
}
