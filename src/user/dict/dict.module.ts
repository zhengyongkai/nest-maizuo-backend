import { Module } from '@nestjs/common';
import { DictController } from './dict.controller';
import { DictService } from './dict.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dict } from './dict.entity';

@Module({
  controllers: [DictController],
  providers: [DictService],
  exports: [DictService],
  imports: [TypeOrmModule.forFeature([Dict])],
})
export class DictModule {}
