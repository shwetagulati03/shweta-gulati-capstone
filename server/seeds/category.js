/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('category').del()
  await knex('category').insert([
    {id: 1, name: 'Mugs',url: 'http://3.111.211.48/mugs/Mugs_Category.jpg'},
    {id: 2, name: 'Pillows', url:'http://3.111.211.48/pillows/Pillows_category.jpg'},
    {id: 3, name: 'Blankets', url:'http://3.111.211.48/blankets/blankets_category.jpg'},
    {id: 4, name: 'T-Shirts', url:'http://3.111.211.48/Tshirts/t-shirts_category.jpg'},
   
  ]);
};