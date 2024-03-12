import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BranchmasterService } from './branchmaster.service';
import { CreateBranchmasterDto } from './dto/create-branchmaster.dto';
import { UpdateBranchmasterDto } from './dto/update-branchmaster.dto';

@Controller('branchmaster')
export class BranchmasterController {
  constructor(private readonly branchmasterService: BranchmasterService) {}

  @Post()
  create(@Body() createBranchmasterDto: CreateBranchmasterDto) {
    return this.branchmasterService.create(createBranchmasterDto);
  }

  @Get()
  findAll() {
    return this.branchmasterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.branchmasterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBranchmasterDto: UpdateBranchmasterDto) {
    return this.branchmasterService.update(+id, updateBranchmasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.branchmasterService.remove(+id);
  }
}
