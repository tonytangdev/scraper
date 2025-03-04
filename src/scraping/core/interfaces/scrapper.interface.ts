import { Article } from '../../../article/core/entities/article.entity';

export abstract class Scrapper {
  abstract fetchArticles(url: string): Promise<Article[]>;
}
