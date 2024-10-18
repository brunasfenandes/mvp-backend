import { validationResult } from 'express-validator';
import initKnex from 'knex';
import configuration from "../../knexfile.js";

const knex = initKnex(configuration);

/**
 * Retrieves all unique rooms with their roomId and roomName.
 */
export const getAllRooms = async (req, res) => {
  try {
    const rooms = await knex('chats')
      .distinct('roomId', 'roomName')
      .select();

    return res.status(200).json(rooms);
  } catch (error) {
    console.error('Error fetching rooms:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};
