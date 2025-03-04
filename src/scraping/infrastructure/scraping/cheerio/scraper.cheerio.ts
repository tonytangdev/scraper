import { Injectable } from '@nestjs/common';
import { Article } from '../../../../article/core/entities/article.entity';
import { Scrapper } from '../../../core/interfaces/scrapper.interface';
import { SelectArticlesStrategy } from './strategies/select-articles.strategy';

@Injectable()
export class ScrapperCheerio implements Scrapper {
  async fetchArticles(url: string): Promise<Article[]> {
    const html = await fetch(url).then((res) => res.text());
    const articles = new SelectArticlesStrategy(url).selectArticles(html);

    return articles;
  }
}
