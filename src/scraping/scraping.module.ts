import { Module } from '@nestjs/common';
import { ScrapingController } from './scraping.controller';

@Module({
  controllers: [ScrapingController],
  providers: [],
})
export class ScrapingModule {}
