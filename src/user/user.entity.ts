import { Article } from '../articles/article.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';

@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', unique: true })
  public name: string;

  @Column({ type: 'varchar', unique: true })
  public email: string;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;

  @Column({ type: 'varchar' })
  public password: string;

  @Column({ type: 'varchar' })
  public gender: string;

  @Column({ type: 'varchar' })
  public age: string;

  @OneToMany((_type) => Article, (article) => article.user, { eager: true })
  article: Article[];
}
