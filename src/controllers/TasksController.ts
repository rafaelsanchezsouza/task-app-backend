import { Request, Response } from 'express';
import { TasksService } from '../services/TasksService';

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
    const id = parseInt(request.params.id);
    const { done } = request.body;

    const tasksService = new TasksService();
    try {
      const novoPortal = await tasksService.update({
        id,
        done,
      });
      return response.json(novoPortal);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  async listAll(request: Request, response: Response) {
    const tasksService = new TasksService();
    try {
      const tasks = await tasksService.listAll();
      return response.status(200).json({ "items": tasks });
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  async delete(request: Request, response: Response) {
    const id = parseInt(request.params.id);
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