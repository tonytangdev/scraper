import { Transform } from 'class-transformer';
import { IsIn, IsInt, IsOptional, Max, Min } from 'class-validator';

export class FindAllArticlesDTO {
  @IsOptional()
  @IsInt()
  @Min(1)
  @Transform(({ value }) => parseInt(value as string, 10))
  page: number = 1;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(50)
  @Transform(({ value }) => parseInt(value as string, 10))
  limit: number = 5;

  @IsOptional()
  @IsIn(['YCombinator'])
  source: string;

  @IsOptional()
  sort: string;
}
