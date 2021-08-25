import { Request, Response } from 'express';
import { TasksService } from '../services/TasksService';

import { getMongoRepository } from "typeorm";
import Task from "../entity/Task";


export async function create(request: Request, response: Response) {
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
export async function update(request: Request, response: Response) {
  const id = parseInt(request.params.id);

  const tasksService = new TasksService();
  try {
    const novoPortal = await tasksService.update({
      id,
    });
    return response.json(novoPortal);
  } catch (err) {
    return response.status(400).json({
      message: err.message,
    });
  }
}

export async function listAll(
  req: Request,
  res: Response
): Promise<Response> {
  const taskRepository = getMongoRepository(Task);
  const tasks = await taskRepository.find();
  console.log(tasks)
  return res.json(tasks);
};

  // export async function delete(request: Request, response: Response) {
  //   const id = parseInt(request.params.id);
  //   const tasksService = new TasksService();
  //   try {
  //     const task = await tasksService.delete(id);
  //     return response.json(task);
  //   } catch (err) {
  //     return response.status(400).json({
  //       message: err.message,
  //     });
  //   }
  // }