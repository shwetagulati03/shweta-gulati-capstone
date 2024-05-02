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

  // Insert into the orders_item table for each item
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

  // Wait for all insert operations to complete
  await Promise.all(promises);

  // Commit the transaction
  await trx.commit();

  console.log('Transaction committed successfully');
  res.status(201).json({ orders_id: insertedOrderId });
} catch (error) {
  // Rollback the transaction if an error occurs
  await trx.rollback();
  console.error('Transaction failed:', error);
}

}

module.exports = {
add
}