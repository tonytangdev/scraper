import { Article } from '../entities/article.entity';

export abstract class ArticleRepository {
  abstract saveArticles(articles: Article[]): Promise<Article[]>;
  abstract findAll(params: {
    limit?: number;
    page?: number;
    source?: string;
    sort?: string[];
  }): Promise<{ data: Article[]; total: number }>;
}
