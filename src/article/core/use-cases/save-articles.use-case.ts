import { Article } from '../entities/article.entity';
import { ArticleRepository } from '../interfaces/article.repository';

export class SaveArticlesUseCase {
  constructor(private readonly articleRepository: ArticleRepository) {}

  async execute(articles: Article[]): Promise<void> {
    await this.articleRepository.saveArticles(articles);
  }
}
