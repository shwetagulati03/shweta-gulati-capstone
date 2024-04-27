/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('category').del()
  await knex('category').insert([
    {id: 1, name: 'Mugs',url: 'https://images.deepai.org/art-image/e49de637a8a849ca9beb1d1a73679a48/i-need-to-create-a-mugs-category-for-my-site.jpg'},
    {id: 2, name: 'Photo Frames', url:'https://images.deepai.org/art-image/245abde0a70a41dbb01dc5a6689236eb/i-want-to-create-image-for-photo-frames-category-on-m.jpg'},
    {id: 3, name: 'Pillows', url:'https://api.deepai.org/job-view-file/62ad5422-c43b-4f38-b3a0-0a606e1509f2/outputs/output.jpg'},
    {id: 4, name: 'T-Shirts', url:'https://api.deepai.org/job-view-file/6bb8a644-d254-4d66-9171-6a48635802cd/outputs/output.jpg'},
    {id: 5, name: 'Clocks', url:'https://api.deepai.org/job-view-file/c7e15828-45d8-49dd-9749-4421cac0de2d/outputs/output.jpg'},
  ]);
};
