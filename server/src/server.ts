import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.static('../client/dist'));
app.get('/', (_req: Request, res: Response) => {

  res.json({ message: 'Hello World!' });

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
