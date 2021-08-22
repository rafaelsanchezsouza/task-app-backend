import { Router } from 'express';
import TasksController from './controllers/TasksController';

const routes = Router();

const tasksController = new TasksController();

// Tasks
routes.post('/tasks', tasksController.create);
routes.get('/tasks', tasksController.listAll);
routes.put('/tasks', tasksController.update);
routes.delete('/tasks', tasksController.delete);

export default routes;