import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from the React app
app.use(express.static('../client/dist'));

app.use(express.json());

// Catch-all route to serve index.html for any requests that don't match a static file
app.get('*', (_req, res) => {
  res.sendFile(path.join('../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

