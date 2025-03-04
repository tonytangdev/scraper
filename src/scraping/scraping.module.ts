import { Module } from '@nestjs/common';
import { ScrapingController } from './scraping.controller';
import { ScrapingService } from './scraping.service';
import { Scrapper } from './core/interfaces/scrapper.interface';
import { JobRepository } from './core/interfaces/job.repository.interface';
import { ArticleService } from './core/interfaces/article.service.interface';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobTypeORMEntity } from './infrastructure/relational/typeORM/entities/job.typeORM.entity';
import { JobTypeORMRepository } from './infrastructure/relational/typeORM/repositories/job.typeORM.repository';
import { ScrapperCheerio } from './infrastructure/scraping/cheerio/scraper.cheerio';

@Module({
  controllers: [ScrapingController],
  providers: [
    ScrapingService,
    {
      provide: Scrapper,
      useClass: ScrapperCheerio,
    },
    {
      provide: JobRepository,
      useClass: JobTypeORMRepository,
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
  imports: [TypeOrmModule.forFeature([JobTypeORMEntity])],
})
export class ScrapingModule {}
