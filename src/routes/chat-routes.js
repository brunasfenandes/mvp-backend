import express from 'express';
import { body, param } from 'express-validator';
import {
  getChatsByRoomId,
  addChatToRoom,
  clearChatsInRoom,
  deleteChatInRoom
} from '../controllers/chat-controller.js';

const router = express.Router({ mergeParams: true });

/**
 * @route   GET /chat
 * @desc    Retrieve all chats for a specific room
 */
router.get(
  '/',
  [
    param('roomId')
      .isInt()
      .withMessage('Invalid room ID format. Must be an integer.'),
  ],
  getChatsByRoomId
);

/**
 * @route   POST /chat
 * @desc    Add a new chat to a specific room
 */
router.post(
  '/',
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
 * @route   DELETE /chat
 * @desc    Clear all chats in a specific room
 */
router.delete(
  '/',
  [
    param('roomId')
      .isInt()
      .withMessage('Invalid room ID format. Must be an integer.'),
  ],
  clearChatsInRoom
);

/**
 * @route   DELETE /chat/:commentId
 * @desc    Delete a specific chat in a room based on commentId
 */
router.delete(
  '/:commentId',
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
