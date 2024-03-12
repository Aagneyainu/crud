import { Injectable } from '@nestjs/common';
import { CreateBranchmasterDto } from './dto/create-branchmaster.dto';
import { UpdateBranchmasterDto } from './dto/update-branchmaster.dto';
import {  branchmas } from './entities/branchmaster.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BranchmasterService {

  constructor(@InjectRepository(branchmas) private usersRepository: Repository<branchmas>) { }

  create(createBranchmasterDto: CreateBranchmasterDto) {
    return 'This action adds a new branchmaster';
  }

 async findAll() {
    return await this.usersRepository.find();
  }

 async findOne(id: any) {
   return await this.usersRepository.findOne(id)
  }

  update(id: number, updateBranchmasterDto: UpdateBranchmasterDto) {
    return `This action updates a #${id} branchmaster`;
  }

  remove(id: number) {
    return `This action removes a #${id} branchmaster`;
  }
}
