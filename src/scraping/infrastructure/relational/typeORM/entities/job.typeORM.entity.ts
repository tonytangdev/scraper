import { ArticleTypeORMEntity } from 'src/article/infrastructure/relational/typeORM/entities/article.typeORM.entity';
import { JobStatus } from '../../../../core/entities/job.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'job' })
export class JobTypeORMEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  url: string;

  @Column({
    type: 'enum',
    enum: JobStatus,
    default: JobStatus.IDLE,
  })
  status: JobStatus;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ type: 'timestamp', name: 'deleted_at', nullable: true })
  deletedAt: Date | null;

  @OneToMany(() => ArticleTypeORMEntity, (article) => article.job)
  articles: ArticleTypeORMEntity[];
}
