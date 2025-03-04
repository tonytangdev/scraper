import { randomUUID } from 'node:crypto';
import { Url } from '../../../shared/value-objects/url';

type ArticleProps = {
  id?: string;
  title: string;
  url: string;
  source: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
  publicationDate: Date;
};

export class Article {
  private id: string;
  private title: string;
  private url: Url;
  private source: string;
  private createdAt: Date;
  private updatedAt: Date;
  private deletedAt: Date | null;
  private publicationDate: Date;

  constructor({
    id = randomUUID(),
    title,
    url,
    source,
    createdAt = new Date(),
    updatedAt = new Date(),
    deletedAt = null,
    publicationDate,
  }: ArticleProps) {
    this.id = id;
    this.title = title;
    this.url = new Url(url);
    this.source = source;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
    this.publicationDate = publicationDate;
  }
}
