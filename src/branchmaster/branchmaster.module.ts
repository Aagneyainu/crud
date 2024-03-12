import { Module } from '@nestjs/common';
import { BranchmasterService } from './branchmaster.service';
import { BranchmasterController } from './branchmaster.controller';

@Module({
  controllers: [BranchmasterController],
  providers: [BranchmasterService],
})
export class BranchmasterModule {}
