import { getMongoRepository, MongoRepository } from 'typeorm';
import Task from '../entity/Task';
import * as Yup from 'yup';

interface ITasksCreate {
  item: string;
}

interface ITasksUpdate {
  id: number;
}

class TasksService {
  private tasksRepository: MongoRepository<Task>;

  constructor() {
    this.tasksRepository = getMongoRepository(Task);
  }
  async create({ item }: ITasksCreate) {
    console.log("entrou Service")
    const tasks = await this.tasksRepository.find();
    const maxNumberOfTasks = false;
    console.log("maxNumberOfTasks")
    console.log(maxNumberOfTasks)
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

  async update({ id }: ITasksUpdate) {
    const task = await this.tasksRepository.findOne({ id });

    task.done = !task.done;

    await this.tasksRepository.save(task);

    return task;
  }

  async listAll() {
    // const tasksRepository = getMongoRepository(Task);
    // console.log(this.tasksRepository.manager)
    // const tasks = await this.tasksRepository.createCursor(this.tasksRepository.find()).toArray();
    const tasks = await this.tasksRepository.find()

    return tasks;
  }

  async delete(id: number) {
    const task = await this.tasksRepository.findOne({ id });

    await this.tasksRepository.delete(task);

    return task;
  }
}

export { TasksService };
