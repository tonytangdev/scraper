import { Article } from '../../../../../article/core/entities/article.entity';
import { ArticleSelector } from '../interfaces/article-selector.interface';

export class BBCArticleSelector implements ArticleSelector {
  selectArticles(html: string): Article[] {
    throw new Error('Method not implemented.');
  }
}
