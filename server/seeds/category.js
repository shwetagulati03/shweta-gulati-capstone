/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('category').del()
  await knex('category').insert([
    {id: 1, name: 'Mugs',url: 'https://images.deepai.org/art-image/7096f201fc024eb6aa837c8a44350283/i-want-to-create-image-for-mugs-category-on-my-e-comm.jpg'},
    {id: 2, name: 'Photo Frames', url:'https://images.deepai.org/art-image/245abde0a70a41dbb01dc5a6689236eb/i-want-to-create-image-for-photo-frames-category-on-m.jpg'},
    {id: 3, name: 'Pillows', url:'https://images.deepai.org/art-image/835af824ba594c7ba1dd79fca0f0d6f0/i-want-to-create-image-for-pillows-category-on-my-e-c.jpg'},
    {id: 4, name: 'T-Shirts', url:'https://images.deepai.org/art-image/e17202526f4e4dd78967ee2b3a41b9a3/i-want-to-create-image-for-plain-t-shirts-category-on.jpg'},
    {id: 5, name: 'Clocks', url:'https://images.deepai.org/art-image/ba410870d77d433692034bd0fa9fae1c/i-want-to-create-image-for-wall-clock-category-on-my-.jpg'},
  ]);
};