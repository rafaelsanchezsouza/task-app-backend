import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn, BeforeInsert
} from 'typeorm';

@Entity('tasks')
export default class Task {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  done: boolean;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  beforeInsertActions() {
    this.done = false;
  }
}