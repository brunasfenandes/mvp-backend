/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('chats', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.text('comment', 'longtext').notNullable(); //needs to be extra long, string, and normal text are not enough
        table.string('commentId').notNullable().defaultTo(knex.fn.uuid());
        table.string('roomName').notNullable().defaultTo(knex.raw(`(
            CASE
                WHEN roomId = 1 THEN 'Hoarding OCD'
                WHEN roomId = 2 THEN 'Paranoid Schizophrenia'
                WHEN roomId = 3 THEN 'Generalized Anxiety Disorder'
                WHEN roomId = 4 THEN 'Major Depressive Disorder'
                ELSE 'Unknown Room'
            END
        )`));
        table.integer('roomId').notNullable();
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
