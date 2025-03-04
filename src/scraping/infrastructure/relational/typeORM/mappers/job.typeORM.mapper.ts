import { Job } from '../../../../core/entities/job.entity';
import { JobTypeORMEntity } from '../entities/job.typeORM.entity';

export class JobTypeORMMapper {
  static toTypeORMEntity(job: Job): JobTypeORMEntity {
    return {
      id: job.getId(),
      url: job.getUrl(),
      status: job.getStatus(),
      createdAt: job.getCreatedAt(),
      updatedAt: job.getUpdatedAt(),
      deletedAt: job.getDeletedAt(),
      articles: [],
    };
  }

  static toDomain(entity: JobTypeORMEntity): Job {
    return new Job({
      id: entity.id,
      url: entity.url,
      status: entity.status,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      deletedAt: entity.deletedAt,
    });
  }
}
