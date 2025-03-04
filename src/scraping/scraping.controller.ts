import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateScrapingJobDTO } from './dtos/create-scraping-job.dto';
import { ScrapingService } from './scraping.service';

@Controller('scrapings')
export class ScrapingController {
  constructor(private readonly scrapingService: ScrapingService) {}

  @Post()
  createScrapingJob(@Body() dto: CreateScrapingJobDTO, @Res() res: Response) {
    // Don't need to wait for the job to finish
    void this.scrapingService.createScrapingJob(dto);
    res.status(HttpStatus.CREATED).send();
  }
}
