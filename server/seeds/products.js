/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    { id:1,
      name: 'Mug',
      description: 'Mug for cat lovers',
      url: 'http://3.111.211.48/mugs/mug1.PNG',
      price: '4'
    },
    { id:2,
      name: 'Mug',
      description: 'Mug for coffee lovers',
      url: 'http://3.111.211.48/mugs/mug2.PNG',
      price: '4'
    },
    { id:3,
      name: 'Mug',
      description: 'Ideal gift for Mothers Day',
      url: 'http://3.111.211.48/mugs/mug3.PNG',
      price: '4'
    },
    { id:4,
      name: 'Mug',
      description: 'Ideal gift for birthday',
      url: 'http://3.111.211.48/mugs/mug4.png',
      price: '4'
    },
    { id:5,
      name: 'Mug',
      description: 'Mug with a motivational quote',
      url: 'http://3.111.211.48/mugs/mug5.png',
      price: '4'
    },
    { id:6,
      name: 'Pillow',
      description: 'Pillow for plant lovers',
      url: 'http://3.111.211.48/pillows/pillow1.jpg',
      price: '6'
    },
    { id:7,
      name: 'Pillow',
      description: 'Gift this designer pillow',
      url: 'http://3.111.211.48/pillows/pillow2.jpg',
      price: '6'
    },
    { id:8,
      name: 'Pillow',
      description: 'Owls design',
      url: 'http://3.111.211.48/pillows/pillow3.jpg',
      price: '6'
    },
    { id:9,
      name: 'Pillow',
      description: 'Gift this pillow',
      url: 'http://3.111.211.48/pillows/pillow4.jpg',
      price: '6'
    },
    { id:10,
      name: 'Pillow',
      description: 'Gift this designer pillow',
      url: 'http://3.111.211.48/pillows/pillow5.jpg',
      price: '6'
    },
    { id:11,
      name: 'Blanket',
      description: 'White Blanket',
      url: 'http://3.111.211.48/blankets/white_blanket.jpg',
      price: '8'
    },
    { id:12,
      name: 'Blanket',
      description: 'White and Black Blanket',
      url: 'http://3.111.211.48/blankets/white_n_black%20(1).jpg',
      price: '8'
    },
    { id:13,
      name: 'Blanket',
      description: 'Boho Styled Blanket',
      url: 'http://3.111.211.48/blankets/Boho_blanket.jpg',
      price: '8'
    },
    { 
      id:14,
      name: 'Blanket',
      description: 'Crochet Blanket',
      url: 'http://3.111.211.48/blankets/crochet_blanket.jpg',
      price: '8'
    },
    { 
      id:15,
      name: 'Blanket',
      description: 'Blue Blanket',
      url: 'http://3.111.211.48/blankets/blue_blanket.jpg',
      price: '8'
    },
    { 
      id:16,
      name: 'T-shirt',
      description: 'White t-shirt with design',
      url: 'http://3.111.211.48/Tshirts/t-shirt1.jpg',
      price: '5'
    },
    { 
      id:17,
      name: 'T-shirt',
      description: 'White t-shirt with design',
      url: 'http://3.111.211.48/Tshirts/t-shirt2.jpg',
      price: '5'
    },
    { id:18,
      name: 'T-shirt',
      description: 'Red Tshirt',
      url: 'http://3.111.211.48/Tshirts/t-shirt3.jpg',
      price: '5'
    },
    { id:19,
      name: 'T-shirt',
      description: 'Blue Tshirt',
      url: 'http://3.111.211.48/Tshirts/t-shirt4.jpg',
      price: '5'
    },
    { id:20,
      name: 'T-Shirt',
      description: 'White T-shirt',
      url: 'http://3.111.211.48/Tshirts/t-shirt5.jpg',
      price: '5'
    },
      ]);
};
