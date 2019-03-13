import express from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

export const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`REST API on http://localhost:${port}/api`);
});
