import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3001;

// Create an absolute path to the client/dist folder
const clientBuildPath = path.resolve(__dirname, '../client/dist');

// Serve static files from the React app
app.use(express.static(clientBuildPath));

app.use(express.json());

// Catch-all route to serve index.html for any requests that don't match a static file
app.get('*', (_req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

