import { randomUUID } from 'node:crypto';
import { Url } from '../../../shared/value-objects/url';

export enum JobStatus {
  IDLE = 'IDLE',
  IN_PROGRESS = 'IN_PROGRESS',
  SUCCESS = 'SUCCESS',
  FAIL = 'FAIL',
}

type JobProps = {
  url: string;
  id?: string;
  status?: JobStatus;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
};

export class Job {
  private id: string;
  private url: Url;
  private status: JobStatus;
  private createdAt: Date;
  private updatedAt: Date;
  private deletedAt: Date | null;

  constructor({
    url,
    id = randomUUID(),
    status = JobStatus.IDLE,
    createdAt = new Date(),
    updatedAt = new Date(),
    deletedAt = null,
  }: JobProps) {
    this.id = id;
    this.url = new Url(url);
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }

  getUrl(): string {
    return this.url.getUrl();
  }

  getStatus(): JobStatus {
    return this.status;
  }

  markAsInProgress(): void {
    this.status = JobStatus.IN_PROGRESS;
  }

  markAsSuccess(): void {
    this.status = JobStatus.SUCCESS;
  }

  markAsFail(): void {
    this.status = JobStatus.FAIL;
  }
}
