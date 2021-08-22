import { getCustomRepository, Repository } from 'typeorm';
import Task from '../models/Task';
import TasksRepository from '../repositories/TasksRepository';
import * as Yup from 'yup';

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
    const tasks = await this.tasksRepository.find();
    const maxNumberOfTasks = tasks.length >= 100;

    if (maxNumberOfTasks) {
      throw new Error('Limit of 100 tasks reached!');
    }

    const task = this.tasksRepository.create({
      item,
    });

    try {
      const schema = Yup.object().shape({
        item: Yup.string()
          .required("Please enter the required field")
          .matches(/^([A-Za-z1234567890\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
            'Cannot contain special characters.')
      })

      await schema.validate(task, { abortEarly: false });
    } catch (err) {
      throw new Error('Cannot contain special characters.')
    }

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
