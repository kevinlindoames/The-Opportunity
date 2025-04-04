import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Opportunity } from '../opportunity/opportunity';

@Schema({ timestamps: true })
export class Company {
  @Prop({ required: true })
  name: string;

  @Prop({ enum: ['government', 'private'], default: 'private' })
  type: string;

  @Prop({
    type: {
      email: String,
      phone: String,
    },
  })
  contact: {
    email: string;
    phone: string;
  };

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Opportunity' }] })
  opportunities: Opportunity[];
}

export type CompanyDocument = Company & Document;
export const CompanySchema = SchemaFactory.createForClass(Company);
