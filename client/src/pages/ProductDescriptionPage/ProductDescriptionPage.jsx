import React from 'react';
import './ProductDescriptionPage.scss';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import {  useHistory,useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Button2 from '../../components/Button2/Button2';
import { Link } from 'react-router-dom';



function ProductDescriptionPage() {
  const {productId} =useParams();
  const [product, setProduct] = useState('');
  const [orderData, setOrderData] = useState(null);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const fetchProduct = async () => {
    try {
        const accessToken=localStorage.getItem("authToken"); 
        console.log(localStorage.getItem("authToken"));
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        const response = await axios.get(`http://localhost:8080/products/${productId}`);
        console.log(response);
        setProduct(response.data[0]);
        console.log(product);
    } catch (error) {
        console.error(`Error fetching data: ${error}`);
    }
}

useEffect(() => {
    console.log("useeffect");
    fetchProduct();
}, [productId]);


useEffect(() => {
  if (product) {
    const calculatedOrderData = {
      
      order_total: product.price,
      items: [
        {
          product_id: product.id,
          quantity: 1,
          price: product.price,
          custom_url: "", 
          order_type: 1 
        }
      ]
    };
    setOrderData(calculatedOrderData);
  }
}, [product]);


const handlePlaceOrder = async () => {
  try {
    const accessToken=localStorage.getItem("authToken"); 
    console.log(localStorage.getItem("authToken"));
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    console.log('Placing order for product:', product);
    console.log(orderData.order_total);
    
    const response = await axios.post(`http://localhost:8080/orders`, orderData);
    console.log('Order placed successfully:', response.data);
    const orderId = response.data.orders_id; 
    console.log(orderId);
    navigate(`/orders/${orderId}`);

  } catch (error) {
    console.error('Error placing order:', error);
  }
}

  return (
    <div className="product">
            <div className='product__imglayout'>
              <img className='product__imglayout--img' src={product.url} />
            </div>
            <div className="product__details">
                <h2 className="product__name">{product.name}</h2>
                <p className="product__price">Price : CAD {product.price}</p>
                <p className="product__details-h">
                  DESCRIPTION
                </p>
                <p className="product__description">{product.description}</p>
                <p className="product__details-h">
                  DELIVERY INFORMATION
                </p>
                <p className="product__description">
                  <li>
                  Since our products are shipped using the services of our courier partners, we will communicate you the date of delivery over email.
                  </li>
                  <li>
                  The delivery cannot be redirected to another address.
                  </li>
                  <li>
                  Soon after the order has been dispatched, you will receive a tracking number that will help you trace your gift.
                  </li>               
                </p>
                <div className='button-wrapper'>
                  <div className='button-wrapper__btn1'>
                  <Button onClick={handlePlaceOrder}>Place Order</Button>
                  </div>
                  <Link to= {`/products/${productId}/generate`} > <Button2>Customize</Button2></Link></div>
                <p className="product__description--custom">**Customize By just paying CAD 5 extra </p>
            </div>
        </div>
  )
}

export default ProductDescriptionPage;