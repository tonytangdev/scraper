import { Injectable } from '@nestjs/common';
import { Article } from './core/entities/article.entity';
import { ArticleRepository } from './core/interfaces/article.repository';

@Injectable()
export class ArticleService {
  constructor(private readonly articleRepository: ArticleRepository) {}

  async saveArticles(articles: Article[]): Promise<void> {
    await this.articleRepository.saveArticles(articles);
  }
}
