import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Opportunity,
  OpportunitySchema,
} from './entities/opportunity/opportunity';
import {
  UserFollowing,
  UserFollowingSchema,
} from './entities/user-following/user-following';
import { OpportunitiesController } from './controllers/opportunities/opportunities.controller';
import { OpportunitiesRepository } from './repositories/opportunities/opportunities.repository';
import { OpportunitiesService } from './services/opportunities/opportunities.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Opportunity.name, schema: OpportunitySchema },
      { name: UserFollowing.name, schema: UserFollowingSchema },
    ]),
  ],
  controllers: [OpportunitiesController],
  providers: [OpportunitiesService, OpportunitiesRepository],
  exports: [OpportunitiesService],
})
export class OpportunitiesModule {}
