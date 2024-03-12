import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
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

  @Get('all')
  findAll() {
    return this.branchmasterService.findAll();
  }

  @Get('getone/:id')
  findOne(@Param('id') id: string) {
    console.log('IDDDD', id);
    return this.branchmasterService.findOne({
      where: {
        br_code: id,
      },
    });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBranchmasterDto: UpdateBranchmasterDto,
  ) {
    return this.branchmasterService.update(+id, updateBranchmasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.branchmasterService.remove(+id);
  }
}
