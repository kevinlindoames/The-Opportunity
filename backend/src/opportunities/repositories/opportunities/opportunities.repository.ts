import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Opportunity,
  OpportunityDocument,
} from 'src/opportunities/entities/opportunity/opportunity';
import {
  UserFollowing,
  UserFollowingDocument,
} from 'src/opportunities/entities/user-following/user-following';

@Injectable()
export class OpportunitiesRepository {
  constructor(
    @InjectModel(Opportunity.name)
    private opportunityModel: Model<OpportunityDocument>,
    @InjectModel(UserFollowing.name)
    private userFollowingModel: Model<UserFollowingDocument>,
  ) {}

  async findAll(filters: any = {}) {
    const query: any = {};

    if (filters.type) {
      query.type = filters.type;
    }

    if (filters.startDate || filters.endDate) {
      query.publish_date = {};
      if (filters.startDate) {
        query.publish_date.$gte = new Date(filters.startDate);
      }
      if (filters.endDate) {
        query.publish_date.$lte = new Date(filters.endDate);
      }
    }

    if (filters.onlyActive !== 'false' && filters.onlyActive !== false) {
      query.close_date = { $gt: new Date() };
    }

    return this.opportunityModel.find(query).sort({ publish_date: -1 }).exec();
  }

  async findFollowed(userId: string, filters: any = {}) {
    const followings = await this.userFollowingModel
      .find({ userId })
      .select('opportunityId')
      .exec();

    const opportunityIds = followings.map((f) => f.opportunityId);

    const query: any = {
      _id: { $in: opportunityIds },
    };

    if (filters.type) {
      query.type = filters.type;
    }

    if (filters.startDate || filters.endDate) {
      query.publish_date = {};
      if (filters.startDate) {
        query.publish_date.$gte = new Date(filters.startDate);
      }
      if (filters.endDate) {
        query.publish_date.$lte = new Date(filters.endDate);
      }
    }

    if (filters.onlyActive !== 'false' && filters.onlyActive !== false) {
      query.close_date = { $gt: new Date() };
    }

    return this.opportunityModel.find(query).sort({ publish_date: -1 }).exec();
  }

  async toggleFollow(userId: string, opportunityId: string) {
    const existing = await this.userFollowingModel
      .findOne({
        userId,
        opportunityId,
      })
      .exec();

    if (existing) {
      await this.userFollowingModel.deleteOne({ _id: existing._id }).exec();
      return { followed: false };
    } else {
      const newFollowing = new this.userFollowingModel({
        userId,
        opportunityId,
        followedAt: new Date(),
      });
      await newFollowing.save();
      return { followed: true };
    }
  }
}
