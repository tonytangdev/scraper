import { Job } from '../../../../../scraping/core/entities/job.entity';
import { Article } from '../../../../../article/core/entities/article.entity';
import { ArticleSelector } from '../interfaces/article-selector.interface';

export class BBCArticleSelector implements ArticleSelector {
  selectArticles(html: string, jobId: Job['id']): Article[] {
    throw new Error('Method not implemented.');
  }
}
