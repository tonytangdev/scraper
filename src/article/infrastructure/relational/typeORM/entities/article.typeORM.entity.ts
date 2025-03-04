import { JobTypeORMEntity } from '../../../../../scraping/infrastructure/relational/typeORM/entities/job.typeORM.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'article' })
export class ArticleTypeORMEntity {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => JobTypeORMEntity, (job) => job.articles)
  job: JobTypeORMEntity;

  @Column({ type: 'timestamp', name: 'published_at' })
  publishedAt: Date;

  @Column()
  title: string;

  @Column()
  url: string;

  @Column()
  source: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ type: 'timestamp', name: 'deleted_at', nullable: true })
  deletedAt: Date | null;
}
