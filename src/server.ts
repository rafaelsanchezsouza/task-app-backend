import express from 'express';
import { createConnection, getMongoRepository, MongoRepository } from 'typeorm'
import cors from 'cors';
import routes from './routes'
// import Task from './models/Task';

const app = express();
const port = process.env.PORT || 3333;
createConnection();

app.use(express.json());
app.use(cors());
app.use(routes);

app.get('/', (request, response) => {
  return response.send('Task App Database');
});

// app.get('/tasks', async (request, response, next) => {
//   const tasksRepository: MongoRepository<Task> = getMongoRepository(Task);

//   const getAll = () => Promise.resolve(tasksRepository.createCursor(tasksRepository.find()).toArray())

//   getAll().then(tasks => response.send(tasks)).catch(err => response.send(err));
// })

app.listen(port, () =>
  console.log(`Server running on port ${port}`)
);