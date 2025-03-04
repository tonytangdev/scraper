import { Injectable } from '@nestjs/common';
import { Article } from '../../../../article/core/entities/article.entity';
import { Scrapper } from '../../../core/interfaces/scrapper.interface';
import { SelectArticlesStrategy } from './strategies/select-articles.strategy';
import { Job } from '../../../../scraping/core/entities/job.entity';

@Injectable()
export class ScrapperCheerio implements Scrapper {
  async fetchArticles(job: Job): Promise<Article[]> {
    const url = job.getUrl();
    const html = await fetch(url).then((res) => res.text());
    const articles = new SelectArticlesStrategy(url).selectArticles(
      html,
      job.getId(),
    );

    return articles;
  }
}
