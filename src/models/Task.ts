import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn, BeforeInsert
} from 'typeorm';

@Entity('tasks')
export default class Task {

  @Column()
  item: string;

  @Column()
  done: boolean;

  @PrimaryGeneratedColumn('increment')
  id: number;

  @BeforeInsert()
  beforeInsertActions() {
    this.done = false;
  }
}