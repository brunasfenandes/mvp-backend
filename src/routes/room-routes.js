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
 * @route   GET /room/:id
 * @desc    Retrieve all chats for a specific room
 */
router.get(
  '/:id',
  [
    param('id')
      .isInt()
      .withMessage('Invalid room ID format. Must be an integer.'),
  ],
  getChatsByRoomId
);

/**
 * @route   POST /room/:id/chat
 * @desc    Add a new chat to a specific room
 */
router.post(
  '/:id/chat',
  [
    param('id')
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
 * @route   DELETE /room/:id
 * @desc    Clear all chats in a specific room
 */
router.delete(
  '/:id',
  [
    param('id')
      .isInt()
      .withMessage('Invalid room ID format. Must be an integer.'),
  ],
  clearChatsInRoom
);

/**
 * @route   DELETE /room/:id/chat/:id
 * @desc    Delete a specific chat in a room based on commentId
 */
router.delete(
  '/:id/chat/:id',
  [
    param('id')
      .isInt()
      .withMessage('Invalid room ID format. Must be an integer.'),
    param('id')
      .isUUID()
      .withMessage('Invalid comment ID format. Must be UUID.')
  ],
  deleteChatInRoom
);

export default router;
