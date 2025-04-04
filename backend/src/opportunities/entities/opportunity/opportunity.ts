import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema({ timestamps: true })
export class Opportunity {
  @Prop({ required: true, unique: true })
  code: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true, enum: ['tender', 'agile'] })
  type: string;

  @Prop({ default: false })
  is_followed: boolean;

  @Prop({ required: true, type: Date })
  publish_date: Date;

  @Prop({ required: true, type: Date })
  close_date: Date;

  @Prop()
  description: string;

  @Prop()
  budget: number;

  @Prop([String])
  requirements: string[];

  @Prop({
    default: 'published',
    enum: ['draft', 'published', 'closed', 'awarded'],
  })
  status: string;

  @Prop([String])
  categories: string[];

  @Prop([{ name: String, url: String }])
  attachments: { name: string; url: string }[];
}

export type OpportunityDocument = Opportunity & Document;
export const OpportunitySchema = SchemaFactory.createForClass(Opportunity);
