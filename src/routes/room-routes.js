import express from 'express';
import chatRouter from './chat-routes.js';
import { getAllRooms } from '../controllers/room-controller.js'; // Import the new controller

const router = express.Router();

// Route to get all rooms
router.get('/', getAllRooms);

// Mount the chat router
router.use('/:roomId/chat', chatRouter);

// Other room-related routes can be added here, this file allows for modularity

export default router;
