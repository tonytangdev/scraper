import { Job } from '../../../../../scraping/core/entities/job.entity';
import { Article } from '../../../../../article/core/entities/article.entity';

export abstract class ArticleSelector {
  abstract selectArticles(html: string, jobId: Job['id']): Article[];
}
