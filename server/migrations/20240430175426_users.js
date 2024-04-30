/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('user_name').notNullable();
        table.string('user_email').notNullable();
        table.string('user_password').notNullable();
        table.string('user_mobile').notNullable();
        table.string('user_address').notNullable();
        table.string('user_city').notNullable();
        table.string('user_state').notNullable();
        table.string('user_country').notNullable();
        table.string('user_zipcode').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
