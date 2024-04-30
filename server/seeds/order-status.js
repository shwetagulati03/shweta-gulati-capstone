/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('order-status').del()
  await knex('order-status').insert([
    {id: 1, 'order-status': 'ORDER PLACED',},
    {id: 2,'order-status': 'ORDER FAILED'},
  ]);
};
