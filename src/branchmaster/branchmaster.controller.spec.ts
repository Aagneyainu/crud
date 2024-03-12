import { Test, TestingModule } from '@nestjs/testing';
import { BranchmasterController } from './branchmaster.controller';
import { BranchmasterService } from './branchmaster.service';

describe('BranchmasterController', () => {
  let controller: BranchmasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BranchmasterController],
      providers: [BranchmasterService],
    }).compile();

    controller = module.get<BranchmasterController>(BranchmasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
