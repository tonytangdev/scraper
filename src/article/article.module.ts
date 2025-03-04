import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleRepository } from './core/interfaces/article.repository';
import { ArticleTypeORMRepository } from './infrastructure/relational/typeORM/repositories/article.typeORM.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleTypeORMEntity } from './infrastructure/relational/typeORM/entities/article.typeORM.entity';
import { ArticleController } from './article.controller';

@Module({
  controllers: [ArticleController],
  providers: [
    ArticleService,
    {
      provide: ArticleRepository,
      useClass: ArticleTypeORMRepository,
    },
  ],
  imports: [TypeOrmModule.forFeature([ArticleTypeORMEntity])],
  exports: [ArticleService],
})
export class ArticleModule {}
