import { Injectable, NotFoundException } from '@nestjs/common';
import { FindOpportunitiesDto } from 'src/opportunities/dto/find-opportunities/find-opportunities';
import { OpportunitiesRepository } from 'src/opportunities/repositories/opportunities/opportunities.repository';

@Injectable()
export class OpportunitiesService {
  constructor(
    private readonly opportunitiesRepository: OpportunitiesRepository,
  ) {}

  async findAll(filters: FindOpportunitiesDto) {
    // By default, only active opportunities
    const defaultFilters = { onlyActive: true, ...filters };
    return this.opportunitiesRepository.findAll(defaultFilters);
  }

  async findFollowed(userId: string, filters: FindOpportunitiesDto) {
    return this.opportunitiesRepository.findFollowed(userId, filters);
  }

  async toggleFollow(userId: string, opportunityId: string) {
    return this.opportunitiesRepository.toggleFollow(userId, opportunityId);
  }
}
