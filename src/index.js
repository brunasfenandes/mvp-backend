import express from 'express';
import cors from 'cors';
import "dotenv/config";
import roomRoutes from "./routes/room-routes.js";

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/room", roomRoutes);

// Basic API route
app.get('/', (_req, _res) => {
  _res.send('Welcome to the MVP API');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('Press CTRL + C to stop server');
});