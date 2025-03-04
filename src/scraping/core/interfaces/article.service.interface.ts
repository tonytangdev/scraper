import { Article } from '../../../article/core/entities/article.entity';

export abstract class ArticleService {
  abstract saveArticles(articles: Article[]): Promise<void>;
}
