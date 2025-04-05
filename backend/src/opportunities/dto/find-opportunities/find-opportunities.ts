import { IsOptional, IsEnum, IsDateString, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

export class FindOpportunitiesDto {
  @IsOptional()
  @IsEnum(['tender', 'agile'])
  type?: string;

  @IsOptional()
  @IsDateString()
  startDate?: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;

  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  onlyActive?: boolean;
}
