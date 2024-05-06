/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('category_products').del()


  await knex('category_products').insert([
    {id: 1, product_id:1,category_id:1},
    {id: 2, product_id:2,category_id:1},
    {id: 3, product_id:3,category_id:1},
    {id: 4, product_id:4,category_id:1},
    {id: 5, product_id:5,category_id:1},
    {id: 6, product_id:6,category_id:2},
    {id: 7, product_id:7,category_id:2},
    {id: 8, product_id:8,category_id:2},
    {id: 9, product_id:9,category_id:2},
    {id: 10, product_id:10,category_id:2},
    {id: 11, product_id:11,category_id:3},
    {id: 12, product_id:12,category_id:3},
    {id: 13, product_id:13,category_id:3},
    {id: 14, product_id:14,category_id:3},
    {id: 15, product_id:15,category_id:3},
    {id: 16, product_id:16,category_id:4},
    {id: 17, product_id:17,category_id:4},
    {id: 18, product_id:18,category_id:4},
    {id: 19, product_id:19,category_id:4},
    {id: 20, product_id:20,category_id:4}

  ]);
};
