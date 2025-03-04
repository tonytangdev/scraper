import { Article } from '../../../../article/core/entities/article.entity';
import { ArticleTypeORMEntity } from '../typeORM/entities/article.typeORM.entity';

export class ArticleTypeORMMapper {
  static toTypeORMEntity(article: Article) {
    const entity = new ArticleTypeORMEntity();
    entity.id = article.getId();
    entity.jobId = article.getJobId();
    entity.url = article.getUrl();
    entity.title = article.getTitle();
    entity.createdAt = article.getCreatedAt();
    entity.updatedAt = article.getUpdatedAt();
    entity.deletedAt = article.getDeletedAt();
    entity.publishedAt = article.getPublishedAt();
    entity.source = article.getSource();

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
