import { Module } from '@nestjs/common';
import { ScrapingController } from './scraping.controller';
import { ScrapingService } from './scraping.service';
import { Scrapper } from './core/interfaces/scrapper.interface';
import { JobRepository } from './core/interfaces/job.repository.interface';
import { ArticleService } from './core/interfaces/article.service.interface';

@Module({
  controllers: [ScrapingController],
  providers: [
    ScrapingService,
    {
      provide: Scrapper,
      useValue: {
        fetchArticles: () => {
          throw new Error('Need to implement Scrapper interface');
        },
      },
    },
    {
      provide: JobRepository,
      useValue: {
        save: () => {
          throw new Error('Need to implement JobRepository interface');
        },
      },
    },
    {
      provide: ArticleService,
      useValue: {
        saveArticles: () => {
          throw new Error('Need to implement ArticleService interface');
        },
      },
    },
  ],
})
export class ScrapingModule {}
