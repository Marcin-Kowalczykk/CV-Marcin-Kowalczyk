import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

app.get('/api/message', (req, res) => {
  res.json({ message: process.env.SECRET_MESSAGE || 'Hello from backend! (code)' });
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});