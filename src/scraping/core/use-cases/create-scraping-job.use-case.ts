import { Job } from '../entities/job.entity';
import { ArticleService } from '../interfaces/article.service.interface';
import { JobRepository } from '../interfaces/job.repository.interface';
import { Scrapper } from '../interfaces/scrapper.interface';

export class createScrapingJobUseCase {
  constructor(
    private readonly scrapper: Scrapper,
    private readonly jobRepository: JobRepository,
    private readonly articleService: ArticleService,
  ) {}

  async execute(url: string): Promise<void> {
    let job = await this.createNewJob(url);
    job = await this.markJobAsPending(job);
    // const articles = await this.scrapeForArticles(job.getUrl());
    // this.saveArticles(articles);
    await this.markJobAsSuccess(job);
  }

  async createNewJob(url: string): Promise<Job> {
    const job = await this.jobRepository.save(new Job({ url }));
    return job;
  }

  async scrapeForArticles(url: string): Promise<void> {
    // TODO: should return an array of articles
    await this.scrapper.fetchArticles(url);
  }

  async markJobAsPending(job: Job): Promise<Job> {
    job.markAsInProgress();
    return this.jobRepository.save(job);
  }

  async markJobAsSuccess(job: Job): Promise<Job> {
    job.markAsSuccess();
    return this.jobRepository.save(job);
  }

  saveArticles(/*articles: Article[]*/): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
