import { Job } from '../entities/job.entity';

export abstract class JobRepository {
  abstract save(job: Job): Promise<Job>;
}
