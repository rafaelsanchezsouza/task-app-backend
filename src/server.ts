import express from 'express';
import { createConnection } from 'typeorm'
import cors from 'cors';
import routes from './routes'

const app = express();
const port = process.env.PORT || 3333;
createConnection();

app.use(express.json());
app.use(cors());
app.use(routes);

app.get('/', (request, response) => {
  return response.send('Task App Database');
});

app.listen(port, () =>
  console.log(`Server running on port ${port}`)
);