import { IsUrl } from 'class-validator';

export class CreateScrapingJobDTO {
  @IsUrl()
  url: string;
}
