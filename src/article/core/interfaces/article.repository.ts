import { Article } from '../entities/article.entity';

export abstract class ArticleRepository {
  abstract saveArticles(articles: Article[]): Promise<void>;
}
