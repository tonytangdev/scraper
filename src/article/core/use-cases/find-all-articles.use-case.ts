import { ArticleRepository } from '../interfaces/article.repository';

export class FindAllArticlesUseCase {
  constructor(private readonly articleRepository: ArticleRepository) {
    this.articleRepository = articleRepository;
  }

  async execute() {
    return this.articleRepository.findAll();
  }
}
