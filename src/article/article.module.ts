import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleRepository } from './core/interfaces/article.repository';

@Module({
  controllers: [],
  providers: [
    ArticleService,
    {
      provide: ArticleRepository,
      useValue: {
        saveArticles: () => {
          throw new Error('Need to implement ArticleRepository.saveArticles');
        },
      },
    },
  ],
  exports: [ArticleService],
})
export class ArticleModule {}
