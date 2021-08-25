import { EntityRepository, Repository } from 'typeorm';
import Task from '../entity/Task';

@EntityRepository(Task)
class TasksRepository extends Repository<Task> { }

export default TasksRepository;
