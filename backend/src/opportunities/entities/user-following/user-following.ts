import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/users/entities/user/user';
import { Opportunity } from '../opportunity/opportunity';

@Schema({ timestamps: true })
export class UserFollowing {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  userId: User;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'Opportunity',
    required: true,
  })
  opportunityId: Opportunity;

  @Prop({ default: Date.now })
  followedAt: Date;

  @Prop({ type: Object, default: { email: true, system: true } })
  notifications: Record<string, boolean>;

  @Prop()
  notes: string;
}

export type UserFollowingDocument = UserFollowing & Document;
export const UserFollowingSchema = SchemaFactory.createForClass(UserFollowing);

// Create a compound index to prevent duplicates
UserFollowingSchema.index({ userId: 1, opportunityId: 1 }, { unique: true });
