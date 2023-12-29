import { Injectable } from '@nestjs/common';
import { Dict } from './dict.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DictService {
  constructor(
    @InjectRepository(Dict)
    private dictRepository: Repository<Dict>,
  ) {}
  async getOne(dictParam: string, dictValue: number): Promise<Dict> {
    const dict = await this.dictRepository.findOne({
      where: { dictParam, dictValue },
    });
    return dict;
  }
}
