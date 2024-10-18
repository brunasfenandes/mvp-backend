import { v4 } from 'uuid';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('chats', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.text('comment', 'longtext').notNullable(); //needs to be extra long, string, and normal text are not enough
        table.string('commentId').notNullable().defaultTo(v4());
        table.string('roomName').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('chats');
};