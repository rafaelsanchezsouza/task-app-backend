import express from 'express';
import TasksController from './controllers/TasksController'
import cors from 'cors';

import './database';

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json()); //para que express consiga ler json
app.use(cors());

app.get('/', (request, response) => {
  return response.send('Hello World!!!');
});

app.post('/teste', TasksController.create);

app.listen(port, () =>
  console.log(`Server running on port ${port}`)
);