import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Opportunity } from 'src/opportunities/entities/opportunity/opportunity';
import { User } from 'src/users/entities/user/user';

@Schema({ timestamps: true })
export class Notification {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  userId: User;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Opportunity' })
  opportunityId: Opportunity;

  @Prop({
    required: true,
    enum: ['new_opportunity', 'close_date', 'status_change', 'system'],
  })
  type: string;

  @Prop({ required: true })
  message: string;

  @Prop({ default: false })
  read: boolean;
}

export type NotificationDocument = Notification & Document;
export const NotificationSchema = SchemaFactory.createForClass(Notification);
