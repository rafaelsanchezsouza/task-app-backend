import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Task from '../models/Task'
import { TasksService } from '../services/TasksService';

export default class TasksController {
  async create(request: Request, response: Response) {
    const { item } = request.body;
    const tasksService = new TasksService();

    try {
      const jsonData = { item }
      const task = tasksService.create(jsonData);
      return response.status(201).json(task);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}