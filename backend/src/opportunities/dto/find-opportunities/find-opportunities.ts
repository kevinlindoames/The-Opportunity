// src/opportunities/dto/find-opportunities/find-opportunities.ts
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
  @Type(() => Boolean) // Convierte automáticamente a boolean
  @IsBoolean()
  onlyActive?: boolean;
}
