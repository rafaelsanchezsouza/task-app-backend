import { getCustomRepository, Repository } from 'typeorm';
import Task from '../models/Task';
import TasksRepository from '../repositories/TasksRepository';

interface ITasksCreate {
  item: string;
}

interface ITasksUpdate {
  id: number;
  done: boolean;
}

class TasksService {
  private tasksRepository: Repository<Task>;

  constructor() {
    this.tasksRepository = getCustomRepository(TasksRepository);
  }
  async create({ item }: ITasksCreate) {
    const task = this.tasksRepository.create({
      item,
    });

    await this.tasksRepository.save(task);

    return task;
  }

  async update({ id, done }: ITasksUpdate) {
    const task = await this.tasksRepository.findOne({ id });

    task.done = !done;

    await this.tasksRepository.save(task);

    return task;
  }

  async listAll() {
    const tasks = await this.tasksRepository.find();

    return tasks;
  }

  async delete(id: number) {
    const task = await this.tasksRepository.findOne({ id });

    await this.tasksRepository.delete(task);

    return task;
  }
}

export { TasksService };
