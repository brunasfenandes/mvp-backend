import { validationResult } from 'express-validator';
import initKnex from 'knex';
import configuration from "../../knexfile.js";

const knex = initKnex(configuration);

/**
 * Retrieves all chats for a specific room, sorted by creation date.
 */
export const getChatsByRoomId = async (req, res) => {
  // Validate request parameters
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  const { roomId } = req.params;

  try {
    const chats = await knex('chats')
      .select('name', 'comment', 'commentId', 'roomName', 'roomId')
      .where({ roomId })
      .orderBy('created_at', 'asc'); // Oldest first, newest last

    return res.status(200).json(chats);
  } catch (error) {
    console.error(`Error fetching chats for room ${roomId}:`, error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

/**
 * Adds a new chat to a specific room.
 */
export const addChatToRoom = async (req, res) => {
  // Validate request parameters and body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  const { roomId } = req.params;
  const { name, comment } = req.body;

  try {
    const newChatId = await knex('chats')
      .insert({
        name,
        comment,
        roomId
      });

    const newChat = await knex('chats')
      .select('name', 'comment', 'commentId', 'roomName', 'roomId')
      .where({ id: newChatId[0] })
      .first();

    return res.status(201).json(newChat);
  } catch (error) {
    console.error(`Error adding chat to room ${roomId}:`, error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

/**
 * Clears all chats in a specific room.
 */
export const clearChatsInRoom = async (req, res) => {
  // Validate request parameters
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  const { roomId } = req.params;

  try {
    await knex('chats')
      .where({ roomId })
      .del();

    return res.status(204).json({ message: `All chats in room ${roomId} have been cleared.` });
  } catch (error) {
    console.error(`Error clearing chats for room ${roomId}:`, error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

/**
 * Deletes a specific chat in a room based on commentId.
 */
export const deleteChatInRoom = async (req, res) => {
  // Validate request parameters
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  const { roomId, commentId } = req.params;

  try {
    const deletedRows = await knex('chats')
      .where({ roomId, commentId })
      .del();

    if (deletedRows === 0) {
      return res.status(404).json({ message: 'Chat not found.' });
    }

    return res.status(204).json({ message: 'Chat deleted successfully.' });
  } catch (error) {
    console.error(`Error deleting chat ${commentId} in room ${roomId}:`, error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};
