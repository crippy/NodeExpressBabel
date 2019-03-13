import express from 'express';

export const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`REST API on http://localhost:${port}/api`);
});
