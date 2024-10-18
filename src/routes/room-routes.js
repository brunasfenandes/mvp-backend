import express from 'express';
import chatRouter from './chat-routes.js';

const router = express.Router();

// Mount the chat router
router.use('/:roomId/chat', chatRouter);

// Other room-related routes can be added here, this file allows for modularity

export default router;
