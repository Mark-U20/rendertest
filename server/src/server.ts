
import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 4000;

// Build an absolute path to the client/dist folder
const clientBuildPath = path.resolve(__dirname, '../client/dist');

// Serve static files from the React app
app.use(express.static(clientBuildPath));

// Optionally, if you have API routes, place them here.
// For example, if you had an API route, it would be defined before the catch-all route.

// Catch-all route: serve index.html for any route not handled above
app.get('*', (_req: Request, res: Response) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

