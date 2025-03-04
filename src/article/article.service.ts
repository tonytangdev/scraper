import { Injectable } from '@nestjs/common';
import { Article } from './core/entities/article.entity';
import { ArticleRepository } from './core/interfaces/article.repository';
import { SaveArticlesUseCase } from './core/use-cases/save-articles.use-case';
import { FindAllArticlesUseCase } from './core/use-cases/find-all-articles.use-case';

@Injectable()
export class ArticleService {
  constructor(private readonly articleRepository: ArticleRepository) {}

  async saveArticles(articles: Article[]): Promise<void> {
    await new SaveArticlesUseCase(this.articleRepository).execute(articles);
  }

  async findAll(): Promise<Article[]> {
    const useCase = new FindAllArticlesUseCase(this.articleRepository);
    const { data, total } = await useCase.execute();

    console.log(`Total articles: ${total}`);
    return data;
  }
}
