import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderDetails from '../../components/OrderDetails/OrderDetails';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';


const OrderDetailsPage = () => {
  const navigate=useNavigate();
  const {orderId}=useParams();
  console.log( orderId);
  console.log( {orderId});
  const [order, setOrder] = useState(null);  

  const [name, setName] = useState("");
  const [email,setEmail] = useState("");
  const [mobile,setMobile] =  useState("");
  const [address, setAddress] = useState("");
  const [city,setCity] = useState("");
  const [country,setCountry] = useState("");
  const [state,setState] = useState("");
  const [zipcode,setZipcode] =  useState("");
  const [activeInput, setActiveInput] = useState(null);

           
  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/orders/${orderId}`);
        setOrder(response.data);
        console.log(order);
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
      const response = await axios.put(`http://localhost:8080/orders/${orderId}`, {
        order_status_id: 1,
      });
      navigate(`/order-success`);
    } catch (error) {
      console.error('Error submitting order:', error);
    }

    
  };

  console.log(order);

  return (
    <div>
      {orderId && order ? <OrderDetails order={order} orderId= {orderId} /> : <p>Loading...</p>}
      <form onSubmit={handleSubmit}>
        <h3>Recipient Details</h3>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleChangeName} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={handleChangeEmail} />
        </label>
        <label>
          Mobile:
          <input type="text" name="mobile" value={mobile} onChange={handleChangeMobile} />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={address} onChange={handleChangeAddress} />
        </label>
        <label>
          City:
          <input type="text" name="city" value={city} onChange={handleChangeCity} />
        </label>
        <label>
          State:
          <input type="text" name="state" value={state} onChange={handleChangeState} />
        </label>
        <label>
          Country:
          <input type="text" name="country" value={country} onChange={handleChangeCountry} />
        </label>
        <label>
          Zipcode:
          <input type="text" name="zipcode" value={zipcode} onChange={handleChangeZipcode} />
        </label>
        <button type="submit">PLACE ORDER</button>
      </form>
    </div>
  );
};

export default OrderDetailsPage;



