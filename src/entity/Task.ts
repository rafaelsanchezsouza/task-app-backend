import { Entity, ObjectID, Column, ObjectIdColumn, BeforeInsert } from 'typeorm'

@Entity('tasks')
export class Task {
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