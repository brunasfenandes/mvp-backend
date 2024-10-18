import express from 'express';
import { body, param } from 'express-validator';
import {
  getChatsByRoomId,
  addChatToRoom,
  clearChatsInRoom,
  deleteChatInRoom
} from '../controllers/room-controller.js';

const router = express.Router();

/**
 * @route   GET /room/:roomId
 * @desc    Retrieve all chats for a specific room
 */
router.get(
  '/:roomId/chat',
  [
    param('roomId')
      .isInt()
      .withMessage('Invalid room ID format. Must be an integer.'),
  ],
  getChatsByRoomId
);

/**
 * @route   POST /room/:roomId/chat
 * @desc    Add a new chat to a specific room
 */
router.post(
  '/:roomId/chat',
  [
    param('roomId')
      .isInt()
      .withMessage('Invalid room ID format. Must be an integer.'),
    body('name')
      .notEmpty()
      .withMessage('Name is required.')
      .isString()
      .withMessage('Name must be a string.'),
    body('comment')
      .notEmpty()
      .withMessage('Comment is required.')
      .isString()
      .withMessage('Comment must be a string.')
  ],
  addChatToRoom
);

/**
 * @route   DELETE /room/:roomId
 * @desc    Clear all chats in a specific room
 */
router.delete(
  '/:roomId/chat',
  [
    param('roomId')
      .isInt()
      .withMessage('Invalid room ID format. Must be an integer.'),
  ],
  clearChatsInRoom
);

/**
 * @route   DELETE /room/:roomId/chat/:commentId
 * @desc    Delete a specific chat in a room based on commentId
 */
router.delete(
  '/:roomId/chat/:commentId',
  [
    param('roomId')
      .isInt()
      .withMessage('Invalid room ID format. Must be an integer.'),
    param('commentId')
      .isUUID()
      .withMessage('Invalid comment ID format. Must be UUID.')
  ],
  deleteChatInRoom
);

export default router;
