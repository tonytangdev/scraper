import { Injectable, Logger } from '@nestjs/common';
import { CreateScrapingJobUseCase } from './core/use-cases/create-scraping-job.use-case';
import { CreateScrapingJobDTO } from './dtos/create-scraping-job.dto';
import { ArticleService } from './core/interfaces/article.service.interface';
import { JobRepository } from './core/interfaces/job.repository.interface';
import { Scrapper } from './core/interfaces/scrapper.interface';

@Injectable()
export class ScrapingService {
  private readonly logger = new Logger(ScrapingService.name);

  constructor(
    private readonly articleService: ArticleService,
    private readonly jobRepository: JobRepository,
    private readonly scrapper: Scrapper,
  ) {}

  async createScrapingJob(dto: CreateScrapingJobDTO): Promise<void> {
    try {
      const useCase = new CreateScrapingJobUseCase(
        this.scrapper,
        this.jobRepository,
        this.articleService,
      );
      await useCase.execute(dto.url);
    } catch (error) {
      this.logger.error(error);
      // TODO: add a retry mechanism
      // TODO: add a way to notify the user
    }
  }
}
