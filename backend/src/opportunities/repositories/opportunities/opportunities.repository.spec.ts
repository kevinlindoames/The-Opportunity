import { Test, TestingModule } from '@nestjs/testing';
import { OpportunitiesService } from 'src/opportunities/services/opportunities/opportunities.service';

describe('OpportunitiesService', () => {
  let service: OpportunitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpportunitiesService],
    }).compile();

    service = module.get<OpportunitiesService>(OpportunitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
