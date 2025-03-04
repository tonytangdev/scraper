import { randomUUID } from 'node:crypto';
import { Url } from '../../../shared/value-objects/url';
import { Job } from '../../../scraping/core/entities/job.entity';

type ArticleProps = {
  id?: string;
  title: string;
  url: string;
  source: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
  publishedAt: Date;
  jobId: Job['id'];
};

export class Article {
  private id: string;
  private title: string;
  private url: Url;
  private source: string;
  private createdAt: Date;
  private updatedAt: Date;
  private deletedAt: Date | null;
  private publishedAt: Date;
  private jobId: Job['id'];

  constructor({
    id = randomUUID(),
    title,
    url,
    source,
    createdAt = new Date(),
    updatedAt = new Date(),
    deletedAt = null,
    publishedAt,
    jobId,
  }: ArticleProps) {
    this.id = id;
    this.title = title;
    this.url = new Url(url);
    this.source = source;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
    this.publishedAt = publishedAt;
    this.jobId = jobId;
  }

  getId(): string {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getUrl(): string {
    return this.url.getUrl();
  }

  getSource(): string {
    return this.source;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  getDeletedAt(): Date | null {
    return this.deletedAt;
  }

  getPublishedAt(): Date {
    return this.publishedAt;
  }

  getJobId(): Job['id'] {
    return this.jobId;
  }

  setJobId(jobId: Job['id']): void {
    this.jobId = jobId;
  }
}
