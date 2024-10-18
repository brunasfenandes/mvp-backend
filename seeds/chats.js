import { faker } from '@faker-js/faker';
import { roomData } from '../utils/roomData.js';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('chats').del();

  const chats = [];
  let currentDate = new Date();

  for (const [roomName, data] of Object.entries(roomData)) {
    const humanBookName = faker.person.fullName();
    const humanBookReaderName = faker.person.fullName();

    // Person 1 description
    chats.push({
      name: humanBookName,
      comment: data.description(humanBookName),
      roomName: roomName,
      created_at: currentDate
    });
    currentDate = new Date(currentDate.getTime() + 60000);

    // Person 1 questions
    for (const question of data.questions) {
      chats.push({
        name: humanBookName,
        comment: question,
        roomName: roomName,
        created_at: currentDate
      });
      currentDate = new Date(currentDate.getTime() + 60000);
    }

    // Conversation
    for (let i = 0; i < data.conversation.length; i++) {
      const speaker = i % 2 === 0 ? humanBookReaderName : humanBookName;
      chats.push({
        name: speaker,
        comment: data.conversation[i],
        roomName: roomName,
        created_at: currentDate
      });
      currentDate = new Date(currentDate.getTime() + 60000);
    }
  }

  await knex('chats').insert(chats);
}
