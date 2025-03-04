import { Article } from '../../../../../article/core/entities/article.entity';

export abstract class ArticleSelector {
  abstract selectArticles(html: string): Article[];
}
