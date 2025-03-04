import { Article } from '../../../article/core/entities/article.entity';
import { Job } from '../entities/job.entity';

export abstract class Scrapper {
  abstract fetchArticles(job: Job): Promise<Article[]>;
}
