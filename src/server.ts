import { express } from 'express';
import TasksController from './controllers/TasksController'
import cors from 'cors';

import './database';

const app = express();
const port = process.env.PORT || 3333;

const tasksController = new TasksController();

app.use(express.json()); //para que express consiga ler json
app.use(cors());

app.get('/', (request, response) => {
  return response.send('Hello World!!!');
});

app.post('/create', tasksController.create);

app.listen(port, () =>
  console.log(`Server running on port ${port}`)
);