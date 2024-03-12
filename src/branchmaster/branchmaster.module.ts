import { Module } from '@nestjs/common';
import { BranchmasterService } from './branchmaster.service';
import { BranchmasterController } from './branchmaster.controller';
import { branchmas } from './entities/branchmaster.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([branchmas])],
  controllers: [BranchmasterController],
  providers: [BranchmasterService],
})


export class BranchmasterModule {}
