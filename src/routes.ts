import { Router } from 'express';
// import TasksController from './controllers/TasksController';
import { listAll } from './controllers/TasksController';

const routes = Router();

// const tasksController = new TasksController();

console.log("Entrou Router")

// Tasks
// routes.post('/tasks', tasksController.create);
routes.get('/tasks', listAll);
// routes.get('/tasks', tasksController.listAll);
// routes.put('/tasks/:id', tasksController.update);
// routes.delete('/tasks/:id', tasksController.delete);

export default routes;