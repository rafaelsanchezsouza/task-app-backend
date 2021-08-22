import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Task from '../models/Task'

export default {
  async create(request: Request, response: Response) {
    const { name, description } = request.body;
    const tasksRepository = getRepository(Task);

    try {
      const jsonData = { name, description }
      const task = tasksRepository.create(jsonData)
      await tasksRepository.save(task)
      return response.status(201).json(task);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}