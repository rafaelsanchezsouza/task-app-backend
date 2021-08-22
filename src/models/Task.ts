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
  item: string;

  @Column()
  done: boolean;

  @BeforeInsert()
  beforeInsertActions() {
    this.done = false;
  }
}