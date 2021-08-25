import {
  Entity,
  Column, BeforeInsert, ObjectIdColumn, ObjectID
} from 'typeorm';

@Entity('tasks')
export default class Task {

  @Column()
  item: string;

  @Column()
  done: boolean;

  @ObjectIdColumn()
  id: ObjectID;

  @BeforeInsert()
  beforeInsertActions() {
    this.done = false;
  }
}