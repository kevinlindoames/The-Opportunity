import {
  IsNotEmpty,
  IsString,
  IsMongoId,
  IsEnum,
  IsOptional,
} from 'class-validator';

export class CreateNotificationDto {
  @IsNotEmpty()
  @IsMongoId()
  userId: string;

  @IsOptional()
  @IsMongoId()
  opportunityId?: string;

  @IsNotEmpty()
  @IsEnum(['new_opportunity', 'close_date', 'status_change', 'system'])
  type: string;

  @IsNotEmpty()
  @IsString()
  message: string;
}
