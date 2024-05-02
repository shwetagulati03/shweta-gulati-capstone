const knex = require("knex")(require("../knexfile"));

const add = async (req, res) => {
    // Change user_id after implementing jwt
//     const { user_id, recipient_id, order_total, status_id, items } = req.body;
  
//     try {
//         await knex.transaction(async (trx) =>{
      
//       const [id] = await knex('orders').insert({
//         users_id: user_id,
//         recipient_id: recipient_id,
//         order_total: order_total,
//         order_status_id: 3
//       });

//           for (const item of items) {
//             await trx('orders_item').insert({
//               order_id: id,
//               product_id: item.product_id,
//               quantity: item.quantity || 1,
//               price: item.price,
//               extra_cost: item.extra_cost || 0,
//               order_type: item.order_type
//             });
//           }
            
//       await knex('orders').where('id', id).update({ order_status_id: 1 });
  
//       const newRecord = await knex("orders")
//         .where({ id })
//         .first();
  
//       res.status(201).json({ order: newRecord });
//    });
//  }
//   catch (error) {
//       console.error('Error creating order:', error);
//       res.status(500).json({
//         message: `Unable to create new order: ${error}`,
//       });
//     }
//   };

const { user_id, recipient_id, order_total, status_id, items } = req.body;
const trx = await knex.transaction();
try{
const [orderId] = await trx('orders').insert({
    users_id: user_id,
    recipient_id: recipient_id,
    order_total: order_total,
    order_status_id: 3
  });
  const insertedOrderId = orderId;

  const promises = items.map(async (item) => {
    await trx('orders_item').insert({
      orders_id: insertedOrderId,
      products_id: item.product_id,
      quantity: item.quantity || 1,
      price: item.price,
      custom_url: item.custom_url,
      image_data: item.image_data,
      orders_type: item.order_type
    });
  });

  await Promise.all(promises);

  await trx.commit();

  console.log('Transaction committed successfully');
  res.status(201).json({ orders_id: insertedOrderId });
} catch (error) {
  // Rollback the transaction if an error occurs
  await trx.rollback();
  console.error('Transaction failed:', error);
}

}


const get = async (req, res) => {
  const {id} = req.params;
  console.log(req.params);
  console.log("here we get",id);
  try {
    const order = await knex('orders')
      .select('*')
      .where('id', id)
      .first();

      console.log(id);
      console.log("LOG order",order);

    const orderItems = await knex('orders_item')
      .select('products_id', 'quantity', 'price', 'custom_url', 'image_data','orders_type')
      .where('orders_id', id);

    const orderDetails = {
      user_id: order.users_id,
      recipient_id: order.recipient_id,
      order_total: order.order_total,
      items: orderItems
    };

    res.json(orderDetails);
  } catch (error) {
    console.error('Error fetching order details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


module.exports = {
add,get
}