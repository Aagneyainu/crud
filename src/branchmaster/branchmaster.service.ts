import { Injectable } from '@nestjs/common';
import { CreateBranchmasterDto } from './dto/create-branchmaster.dto';
import { UpdateBranchmasterDto } from './dto/update-branchmaster.dto';

@Injectable()
export class BranchmasterService {
  create(createBranchmasterDto: CreateBranchmasterDto) {
    return 'This action adds a new branchmaster';
  }

  findAll() {
    return `This action returns all branchmaster`;
  }

  findOne(id: number) {
    return `This action returns a #${id} branchmaster`;
  }

  update(id: number, updateBranchmasterDto: UpdateBranchmasterDto) {
    return `This action updates a #${id} branchmaster`;
  }

  remove(id: number) {
    return `This action removes a #${id} branchmaster`;
  }
}
