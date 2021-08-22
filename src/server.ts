import express from 'express';
import TasksController from './controllers/TasksController'
import cors from 'cors';
import routes from './routes'

import './database';

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(cors());
app.use(routes);

app.get('/', (request, response) => {
  return response.send('Hello World!!!');
});

app.listen(port, () =>
  console.log(`Server running on port ${port}`)
);