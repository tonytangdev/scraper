import { Injectable } from '@nestjs/common';
import { ArticleRepository } from '../../../../core/interfaces/article.repository';
import { Article } from 'src/article/core/entities/article.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleTypeORMEntity } from '../entities/article.typeORM.entity';
import { Repository } from 'typeorm';
import { ArticleTypeORMMapper } from '../../mappers/article.typeORM.mapper';

@Injectable()
export class ArticleTypeORMRepository implements ArticleRepository {
  constructor(
    @InjectRepository(ArticleTypeORMEntity)
    private readonly articleRepository: Repository<ArticleTypeORMEntity>,
  ) {}

  async saveArticles(articles: Article[]): Promise<Article[]> {
    const entities = articles.map((article) =>
      ArticleTypeORMMapper.toTypeORMEntity(article),
    );

    const savedArticles = await this.articleRepository.save(entities);

    const articlesToReturn = savedArticles.map((article) =>
      ArticleTypeORMMapper.toDomainEntity(article),
    );

    return articlesToReturn;
  }

  async findAll(): Promise<Article[]> {
    const articles = await this.articleRepository.find({
      relations: ['job'],
    });

    const articlesToReturn = articles.map((article) =>
      ArticleTypeORMMapper.toDomainEntity(article),
    );

    return articlesToReturn;
  }
}
