// src/app.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();


app.use(cors());

//parse data
app.use(express.json());


// Basic API route
app.get('/', (_req, _res) => {
  _res.send('Welcome to the MVP API');
});


// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('Press CTRL + C to stop server');
});