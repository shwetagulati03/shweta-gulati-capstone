import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './OrderDetailsPage.scss';
import Button from '../../components/Button/Button';

const OrderDetailsPage = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [productImages, setProductImages] = useState({}); 

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const accessToken = localStorage.getItem("authToken");
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        const response = await axios.get(`http://localhost:8080/orders/${orderId}`);
        setOrder(response.data);
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangeMobile = (event) => {
    setMobile(event.target.value);
  };
  
  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };
  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };
  const handleChangeState = (event) => {
    setState(event.target.value);
  };
  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };
  const handleChangeZipcode = (event) => {
    setZipcode(event.target.value);
  };


 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const accessToken = localStorage.getItem("authToken");
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      const recipientResponse = await axios.post('http://localhost:8080/orders/recipient', {
        user_name: name,
        user_email: email,
        user_mobile: mobile,
        user_address: address,
        user_city: city,
        user_state: state,
        user_country: country,
        user_zipcode: zipcode
      });
      const recipientId = recipientResponse.data.recipient_id;
      const orderResponse = await axios.put(`http://localhost:8080/orders/${orderId}`, {
        order_status_id: 1,
        recipient_id: recipientId
      });
      navigate(`/order-success`);
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };

  useEffect(() => {
    const fetchProductImage = async (productId) => {
      try {
        const response = await axios.get(`http://localhost:8080/products/${productId}`);
        const imageUrl = response.data[0]?.url;
        setProductImages((prevImages) => ({
          ...prevImages,
          [productId]: imageUrl,
        }));
      } catch (error) {
        console.error('Error fetching product image:', error);
      }
    };

    if (order) {
      order.items.forEach((item) => {
        if (item.orders_type !== 3) {
          fetchProductImage(item.products_id);
        }
      });
    }
  }, [order]);


  return (
    <div className='order'>
      <div className='order-details__wrapper'>
      <h1 className='order-details__h1'>Order Details</h1>
      {order && (
      <div className='order-details'>
          
          {order.items.map((item, index) => (
            <div className='order-details__item' key={index}>
              <div className='order-details__item--img'>
              {item.orders_type !== 3 && productImages[item.products_id] && (
                      <img src={productImages[item.products_id]} alt="Product Design" />
                    )}
                {item.orders_type === 3 && (
                  <img src={item.custom_url} alt="Custom Design" />
                )}
              </div>
                <p className='order-details__item--quantity'>Quantity: {item.quantity}</p>
                <p className='order-details__item--price'>Price: ${item.price}</p>
              </div>

          ))}
          <p className='order-details__item--price'>Order Total: ${order.order_total}</p>
        </div>
      )}
      {!order && <p>Loading...</p>}

      </div>
      <form className='order-details__form' onSubmit={handleSubmit}>
        <h2 className='order-details__form--h'>Enter Recipient Details</h2>
        <label classname='order-details__form--element'>Name: </label>
        
          <input type="text" name="name" value={name} onChange={handleChangeName} />
       
        <label classname='order-details__form--element'> Email:</label>
         
          <input type="email" name="email" value={email} onChange={handleChangeEmail} />
        
        <label classname='order-details__form--element'>   Mobile: </label>
       
          <input type="text" name="mobile" value={mobile} onChange={handleChangeMobile} />
       
        <label classname='order-details__form--element'>Address:</label>
          
          <input type="text" name="address" value={address} onChange={handleChangeAddress} />
        
        <label classname='order-details__form--element'> City:</label>
         
          <input type="text" name="city" value={city} onChange={handleChangeCity} />
        
        <label classname='order-details__form--element'> State: </label>
          
          <input type="text" name="state" value={state} onChange={handleChangeState} />
      
        <label classname='order-details__form--element'>Country:</label>
      
          <input type="text" name="country" value={country} onChange={handleChangeCountry} />
        
        <label classname='order-details__form--element'>Zipcode:</label>
          
          <input type="text" name="zipcode" value={zipcode} onChange={handleChangeZipcode} />
        
        <button type="submit" className='submit' >PLACE ORDER</button>
      </form>
    </div>
  );
};

export default OrderDetailsPage;
