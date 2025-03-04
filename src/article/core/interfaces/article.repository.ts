import { Article } from '../entities/article.entity';

export abstract class ArticleRepository {
  abstract saveArticles(articles: Article[]): Promise<Article[]>;
  abstract findAll(): Promise<Article[]>;
}
