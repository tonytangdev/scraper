import { Article } from 'src/article/core/entities/article.entity';
import { Job } from '../entities/job.entity';
import { ArticleService } from '../interfaces/article.service.interface';
import { JobRepository } from '../interfaces/job.repository.interface';
import { Scrapper } from '../interfaces/scrapper.interface';

export class CreateScrapingJobUseCase {
  constructor(
    private readonly scrapper: Scrapper,
    private readonly jobRepository: JobRepository,
    private readonly articleService: ArticleService,
  ) {}

  async execute(url: string): Promise<void> {
    let job: Job | null = null;
    try {
      job = await this.createNewJob(url);
      job = await this.markJobAsPending(job);
      const articles = await this.scrapeForArticles(job.getUrl());
      await this.saveArticles(articles);
      await this.markJobAsSuccess(job);
    } catch (error) {
      if (job) await this.markJobAsFailed(job);
      throw error;
    }
  }

  private async createNewJob(url: string): Promise<Job> {
    const job = await this.jobRepository.save(new Job({ url }));
    return job;
  }

  private async scrapeForArticles(url: string): Promise<Article[]> {
    return this.scrapper.fetchArticles(url);
  }

  private async markJobAsPending(job: Job): Promise<Job> {
    job.markAsInProgress();
    return this.jobRepository.save(job);
  }

  private async markJobAsSuccess(job: Job): Promise<Job> {
    job.markAsSuccess();
    return this.jobRepository.save(job);
  }

  private async saveArticles(articles: Article[]): Promise<void> {
    await this.articleService.saveArticles(articles);
  }

  private async markJobAsFailed(job: Job): Promise<Job> {
    job.markAsFail();
    return this.jobRepository.save(job);
  }
}
