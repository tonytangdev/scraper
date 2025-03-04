import { Controller, Get, Query } from '@nestjs/common';
import { ArticleService } from './article.service';
import { FindAllArticlesDTO } from './dtos/find-all-articles.dto';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  async getArticles(@Query() query: FindAllArticlesDTO) {
    return this.articleService.findAll(query);
  }
}
