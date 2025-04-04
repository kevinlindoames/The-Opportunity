import { IsOptional, IsEnum, IsDateString, IsBoolean } from 'class-validator';

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
  @IsBoolean()
  onlyActive?: boolean = true;
}
