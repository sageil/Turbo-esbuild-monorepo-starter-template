import type { Application, Request, Response } from 'express';
import express from 'express';
const app: Application = express();

app.get('/', (_: Request, res: Response) => {
  res.send('Built with Typescript, PNPM and esbuild');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
  console.log('Visit http://localhost:3000/');
});
