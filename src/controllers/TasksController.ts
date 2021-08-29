import { Request, Response } from 'express';
import { TasksService } from '../services/TasksService';

import { getMongoRepository, ObjectID } from "typeorm";
import { Task } from "../entity/Task";


export default class TasksController {
  async create(request: Request, response: Response) {
    const { item } = request.body;
    const tasksService = new TasksService();
    try {
      const jsonData = { item }
      const task = tasksService.create(jsonData);
      return response.status(201).json({ "item": (await task).item, "done": (await task).done });
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
  async update(request: Request, response: Response) {
    const id = request.params.id as unknown as ObjectID;

    const tasksService = new TasksService();
    try {
      const novoPortal = await tasksService.update({ id });
      return response.json(novoPortal);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  async listAll(
    req: Request,
    res: Response
  ): Promise<Response> {
    const taskRepository = getMongoRepository(Task);
    const tasks = await taskRepository.find();
    console.log(tasks)
    return res.json(tasks);
  };

  async delete(request: Request, response: Response) {
    const id = request.params.id as unknown as ObjectID;
    const tasksService = new TasksService();
    try {
      const task = await tasksService.delete(id);
      return response.json(task);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}

