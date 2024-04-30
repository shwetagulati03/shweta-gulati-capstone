/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('order-type').del()
  await knex('order-type').insert([
    {id: 1, 'order-type': 'Standard'},
    {id: 2, 'order-type': 'Custom_upload'},
    {id: 3, 'order-type': 'Custom_text'}
  ]);
};
