import express from 'express';
import { createConnection } from 'typeorm'
import cors from 'cors';
import routes from './routes'
import morgan from 'morgan';

const app = express();
const port = process.env.PORT || 3333;
createConnection();
console.log("Connectiong to MongoDB User:")
console.log(process.env.USERNAME)

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(morgan('dev'))

app.get('/', (request, response) => {
  return response.send('Task App Database');
});

app.listen(port, () =>
  console.log(`Server running on port ${port}`)
);