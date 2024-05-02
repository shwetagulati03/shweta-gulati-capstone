/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('orders_item', (table) => {
        table.increments('id').primary();
        table.integer('products_id').unsigned().references('id').inTable('products');
        table.integer('quantity').unsigned();
        table.integer('price').unsigned();
        table.integer('orders_id').unsigned().references('id').inTable('orders');
        table.string('custom_url').nullable();
        table.specificType('image_data', 'longblob').nullable();
        table.integer('orders_type').unsigned().references('id').inTable('order-type');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('orders_item');
};