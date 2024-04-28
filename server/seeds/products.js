/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    { id:1,
      name: 'Mug 1',
      description: 'Description for Mug 1',
      url: 'https://images.deepai.org/art-image/7096f201fc024eb6aa837c8a44350283/i-want-to-create-image-for-mugs-category-on-my-e-comm.jpg',
      price: '1.99'
    },
    { id:2,
      name: 'Mug 2',
      description: 'Description for Mug 2',
      url: 'https://images.deepai.org/art-image/7096f201fc024eb6aa837c8a44350283/i-want-to-create-image-for-mugs-category-on-my-e-comm.jpg',
      price: '2.99'
    },
    { id:3,
      name: 'Mug 3',
      description: 'Description for Mug 3',
      url: 'https://images.deepai.org/art-image/7096f201fc024eb6aa837c8a44350283/i-want-to-create-image-for-mugs-category-on-my-e-comm.jpg',
      price: '2.49'
    },
    { id:4,
      name: 'Mug 4',
      description: 'Description for Mug 4',
      url: 'https://images.deepai.org/art-image/7096f201fc024eb6aa837c8a44350283/i-want-to-create-image-for-mugs-category-on-my-e-comm.jpg',
      price: '1.49'
    },
    { id:5,
      name: 'Mug 5',
      description: 'Description for Mug 5',
      url: 'https://images.deepai.org/art-image/7096f201fc024eb6aa837c8a44350283/i-want-to-create-image-for-mugs-category-on-my-e-comm.jpg',
      price: '1.99'
    },
    { id:6,
      name: 'Pillow 1',
      description: 'Description for Pillow 1',
      url: 'https://images.deepai.org/art-image/835af824ba594c7ba1dd79fca0f0d6f0/i-want-to-create-image-for-pillows-category-on-my-e-c.jpg',
      price: '3.99'
    },
    { id:7,
      name: 'Pillow 2',
      description: 'Description for Pillow 2',
      url: 'https://images.deepai.org/art-image/835af824ba594c7ba1dd79fca0f0d6f0/i-want-to-create-image-for-pillows-category-on-my-e-c.jpg',
      price: '3.29'
    },
    { id:8,
      name: 'Pillow 3',
      description: 'Description for Pillow 3',
      url: 'https://images.deepai.org/art-image/835af824ba594c7ba1dd79fca0f0d6f0/i-want-to-create-image-for-pillows-category-on-my-e-c.jpg',
      price: '2.99'
    },
    { id:9,
      name: 'Pillow 4',
      description: 'Description for Pillow 4',
      url: 'https://images.deepai.org/art-image/835af824ba594c7ba1dd79fca0f0d6f0/i-want-to-create-image-for-pillows-category-on-my-e-c.jpg',
      price: '2.39'
    },
    { id:10,
      name: 'Pillow 5',
      description: 'Description for Pillow 5',
      url: 'https://images.deepai.org/art-image/835af824ba594c7ba1dd79fca0f0d6f0/i-want-to-create-image-for-pillows-category-on-my-e-c.jpg',
      price: '2.69'
    },
    { id:11,
      name: 'T-shirt 1',
      description: 'Description for T-shirt 1',
      url: 'https://images.deepai.org/art-image/e17202526f4e4dd78967ee2b3a41b9a3/i-want-to-create-image-for-plain-t-shirts-category-on.jpg',
      price: '9.99'
    },
    { id:12,
      name: 'T-shirt 2',
      description: 'Description for T-shirt 2',
      url: 'https://images.deepai.org/art-image/e17202526f4e4dd78967ee2b3a41b9a3/i-want-to-create-image-for-plain-t-shirts-category-on.jpg',
      price: '10.99'
    },
    { id:13,
      name: 'T-shirt 3',
      description: 'Description for T-shirt 3',
      url: 'https://images.deepai.org/art-image/e17202526f4e4dd78967ee2b3a41b9a3/i-want-to-create-image-for-plain-t-shirts-category-on.jpg',
      price: '12.99'
    },
    { 
      id:14,
      name: 'T-shirt 4',
      description: 'Description for T-shirt 4',
      url: 'https://images.deepai.org/art-image/e17202526f4e4dd78967ee2b3a41b9a3/i-want-to-create-image-for-plain-t-shirts-category-on.jpg',
      price: '13.99'
    },
    { 
      id:15,
      name: 'T-shirt 5',
      description: 'Description for T-shirt 5',
      url: 'https://images.deepai.org/art-image/e17202526f4e4dd78967ee2b3a41b9a3/i-want-to-create-image-for-plain-t-shirts-category-on.jpg',
      price: '15.99'
    },
    { 
      id:16,
      name: 'Photo Frame 1',
      description: 'Description for Photo Frame 1',
      url: 'https://images.deepai.org/art-image/245abde0a70a41dbb01dc5a6689236eb/i-want-to-create-image-for-photo-frames-category-on-m.jpg',
      price: '7.99'
    },
    { 
      id:17,
      name: 'Photo Frame 2',
      description: 'Description for Photo Frame 2',
      url: 'https://images.deepai.org/art-image/245abde0a70a41dbb01dc5a6689236eb/i-want-to-create-image-for-photo-frames-category-on-m.jpg',
      price: '6.99'
    },
    { id:18,
      name: 'Photo Frame 3',
      description: 'Description for Photo Frame 3',
      url: 'https://images.deepai.org/art-image/245abde0a70a41dbb01dc5a6689236eb/i-want-to-create-image-for-photo-frames-category-on-m.jpg',
      price: '12.99'
    },
    { id:19,
      name: 'Photo Frame 4',
      description: 'Description for Photo Frame 4',
      url: 'https://images.deepai.org/art-image/245abde0a70a41dbb01dc5a6689236eb/i-want-to-create-image-for-photo-frames-category-on-m.jpg',
      price: '11.99'
    },
    { id:20,
      name: 'Photo Frame 5',
      description: 'Description for Photo Frame 5',
      url: 'https://images.deepai.org/art-image/245abde0a70a41dbb01dc5a6689236eb/i-want-to-create-image-for-photo-frames-category-on-m.jpg',
      price: '9.99'
    },
    { id:21,
      name: 'Clock 1',
      description: 'Description for Clock 1',
      url: 'https://images.deepai.org/art-image/ba410870d77d433692034bd0fa9fae1c/i-want-to-create-image-for-wall-clock-category-on-my-.jpg',
      price: '11.99'
    },
    { 
      id:22,
      name: 'Clock 2',
      description: 'Description for Clock 2',
      url: 'https://images.deepai.org/art-image/ba410870d77d433692034bd0fa9fae1c/i-want-to-create-image-for-wall-clock-category-on-my-.jpg',
      price: '12.99'
    },
    { 
      id:23,
      name: 'Clock 3',
      description: 'Description for Clock 3',
      url: 'https://images.deepai.org/art-image/ba410870d77d433692034bd0fa9fae1c/i-want-to-create-image-for-wall-clock-category-on-my-.jpg',
      price: '11.49'
    },
    { id:24,
      name: 'Clock 4',
      description: 'Description for Clock 4',
      url: 'https://images.deepai.org/art-image/ba410870d77d433692034bd0fa9fae1c/i-want-to-create-image-for-wall-clock-category-on-my-.jpg',
      price: '9.99'
    },
    {id:25, 
      name: 'Clock 5',
      description: 'Description for Clock 5',
      url: 'https://images.deepai.org/art-image/ba410870d77d433692034bd0fa9fae1c/i-want-to-create-image-for-wall-clock-category-on-my-.jpg',
      price: '10.99'
    }
  ]);
};
