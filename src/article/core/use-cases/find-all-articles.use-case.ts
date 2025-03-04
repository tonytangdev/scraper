import { FindAllArticlesDTO } from 'src/article/dtos/find-all-articles.dto';
import { ArticleRepository } from '../interfaces/article.repository';

export class FindAllArticlesUseCase {
  constructor(private readonly articleRepository: ArticleRepository) {
    this.articleRepository = articleRepository;
  }

  async execute(dto: FindAllArticlesDTO) {
    const sort = dto.sort.split(',');
    return this.articleRepository.findAll({
      limit: dto.limit,
      page: dto.page,
      source: dto.source,
      sort: sort,
    });
  }
}
