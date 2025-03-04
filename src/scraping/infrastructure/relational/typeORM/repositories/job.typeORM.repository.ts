import { Injectable } from '@nestjs/common';
import { JobRepository } from '../../../../core/interfaces/job.repository.interface';
import { Job } from 'src/scraping/core/entities/job.entity';
import { JobTypeORMMapper } from '../mappers/job.typeORM.mapper';
import { Repository } from 'typeorm';
import { JobTypeORMEntity } from '../entities/job.typeORM.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class JobTypeORMRepository implements JobRepository {
  constructor(
    @InjectRepository(JobTypeORMEntity)
    private readonly jobRepository: Repository<JobTypeORMEntity>,
  ) {}

  async save(job: Job): Promise<Job> {
    const entity = JobTypeORMMapper.toTypeORMEntity(job);

    await this.jobRepository.save(entity);

    const savedJob = await this.jobRepository.findOneBy({
      id: job.getId(),
    });

    if (!savedJob) {
      throw new Error('Job not saved');
    }

    return JobTypeORMMapper.toDomain(savedJob);
  }
}
