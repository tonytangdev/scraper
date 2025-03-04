import { Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('scrapings')
export class ScrapingController {
  constructor() {}

  @Post()
  createScrapingJob(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }
}
