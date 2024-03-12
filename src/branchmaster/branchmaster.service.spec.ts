import { Test, TestingModule } from '@nestjs/testing';
import { BranchmasterService } from './branchmaster.service';

describe('BranchmasterService', () => {
  let service: BranchmasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BranchmasterService],
    }).compile();

    service = module.get<BranchmasterService>(BranchmasterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
