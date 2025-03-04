import { Module } from '@nestjs/common';
import { ScrapingController } from './scraping.controller';
import { ScrapingService } from './scraping.service';
import { Scrapper } from './core/interfaces/scrapper.interface';
import { JobRepository } from './core/interfaces/job.repository.interface';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobTypeORMEntity } from './infrastructure/relational/typeORM/entities/job.typeORM.entity';
import { JobTypeORMRepository } from './infrastructure/relational/typeORM/repositories/job.typeORM.repository';
import { ScrapperCheerio } from './infrastructure/scraping/cheerio/scraper.cheerio';
import { ArticleModule } from 'src/article/article.module';

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
  ],
  imports: [TypeOrmModule.forFeature([JobTypeORMEntity]), ArticleModule],
})
export class ScrapingModule {}
