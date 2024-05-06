import React from 'react';
import './OrderDetails';
import axios from 'axios';
import { useState,useEffect } from 'react';

const OrderDetails = ({ order, orderId }) => {
  const [productImage, setProductImage] = useState(null);

  useEffect(() => {
    const fetchProductImage = async () => {
  
      if (order.items[0].orders_type !== 3) {
     
        try {
          const accessToken=localStorage.getItem("authToken"); 
        console.log(localStorage.getItem("authToken"));
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        console.log(order.items[0].products_id);
          const response = await axios.get(`http://localhost:8080/products/${order.items[0].products_id}`);
          console.log(response);
          setProductImage(response.data[0].url); // Assuming there's a property called image_url in the product data
        } catch (error) {
          console.error('Error fetching product image:', error);
        }
      }
    };

    fetchProductImage();
  }, [order]);

  console.log(order.items[0].orders_type);
  console.log(orderId);


  return (
    <div className='order-details'>
      <h1 className='order-details__h1'>Order Details</h1>
      {/* <div classname='titles'>
        <h2 classname='order-details__title'>PRODUCT</h2>
        <h2 classname='order-details__title'>PRODUCT</h2>
        <h2 classname='order-details__title'>QUANTITY</h2>
        <h2 classname='order-details__title'>PRICE</h2>
      </div> */}
      <div>

        {order.items.map((item, index) => (
          <div className='order-details__item' key={index}>
            <div className='order-details__item--img'> 
            {item.orders_type !== 3 && productImage && (
            <img src={productImage} alt="Product Design" />
          )}
          {item.orders_type === 3 && (
            <img src={item.custom_url} alt="Custom Design" />
          )}
          </div>
          <div className='order-details__item__details'>
              <div className='order-details__item__details__name'>{item.product_name}</div>
              <p className='order-details__item__details__quantity'>Quantity: {item.quantity}</p>
              <p className='order-details__item__details__price'>Price: ${item.price}</p>
            </div>
         
        </div>
        ))}
      </div>
      <p>Order Total: ${order.order_total}</p>
    </div>
  );
};

export default OrderDetails;
