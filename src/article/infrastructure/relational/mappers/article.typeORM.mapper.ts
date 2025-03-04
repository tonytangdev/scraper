import { JobTypeORMEntity } from '../../../../scraping/infrastructure/relational/typeORM/entities/job.typeORM.entity';
import { Article } from '../../../../article/core/entities/article.entity';
import { ArticleTypeORMEntity } from '../typeORM/entities/article.typeORM.entity';

export class ArticleTypeORMMapper {
  static toTypeORMEntity(article: Article) {
    const entity: ArticleTypeORMEntity = {
      id: article.getId(),
      job: { id: article.getJobId() } as JobTypeORMEntity,
      url: article.getUrl(),
      title: article.getTitle(),
      createdAt: article.getCreatedAt(),
      updatedAt: article.getUpdatedAt(),
      deletedAt: article.getDeletedAt(),
      publishedAt: article.getPublishedAt(),
      source: article.getSource(),
    };

    return entity;
  }

  static toDomainEntity(entity: ArticleTypeORMEntity): Article {
    const article = new Article({
      id: entity.id,
      jobId: entity.job.id,
      url: entity.url,
      title: entity.title,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      deletedAt: entity.deletedAt,
      publishedAt: entity.publishedAt,
      source: entity.source,
    });

    return article;
  }
}
