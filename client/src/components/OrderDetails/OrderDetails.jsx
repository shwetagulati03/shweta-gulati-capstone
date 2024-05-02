import React from 'react';

const OrderDetails = ({ order,orderId }) => {
  console.log(order);
  console.log(orderId);
  return (
    <div>
      <h3>Order Details</h3>
      <p>Order ID: {orderId}</p>
      <p>Order Total: ${order.order_total}</p>
      <h4>Order Items</h4>
      <ul>
        {order.items.map((item, index) => (
          <li key={index}>
            <p>Product ID: {item.products_id}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>
            {item.custom_url && (
                <img src={item.custom_url} alt="Custom Design" />
            )}
            {item.image_data && (
            <img src={`data:image/jpeg;base64,${item.image_data}`} alt="Uploaded Design" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderDetails;