import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderDetails from '../../components/OrderDetails/OrderDetails';
import { useParams } from 'react-router-dom';

const OrderDetailsPage = () => {
  const {orderId}=useParams();
  console.log( orderId);
  console.log( {orderId});
  const [order, setOrder] = useState(null);
  const [recipientDetails, setRecipientDetails] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zipcode: ''
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipientDetails({ ...recipientDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    
    // try {
    //   const response = await axios.post(`http://localhost:8080/orders/${orderId}`);
    //   console.log('Recipient details submitted successfully:', response.data);
    //   // Optionally, you can update the UI or navigate to another page after submission
    // } catch (error) {
    //   console.error('Error submitting recipient details:', error);
    // }
  };

  console.log(order);

  return (
    <div>
      {orderId && order ? <OrderDetails order={order} orderId= {orderId} /> : <p>Loading...</p>}
      <form onSubmit={handleSubmit}>
        <h3>Recipient Details</h3>
        <label>
          Name:
          <input type="text" name="name" value={recipientDetails.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={recipientDetails.email} onChange={handleChange} />
        </label>
        <label>
          Mobile:
          <input type="text" name="mobile" value={recipientDetails.mobile} onChange={handleChange} />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={recipientDetails.address} onChange={handleChange} />
        </label>
        <label>
          City:
          <input type="text" name="city" value={recipientDetails.city} onChange={handleChange} />
        </label>
        <label>
          State:
          <input type="text" name="state" value={recipientDetails.state} onChange={handleChange} />
        </label>
        <label>
          Country:
          <input type="text" name="country" value={recipientDetails.country} onChange={handleChange} />
        </label>
        <label>
          Zipcode:
          <input type="text" name="zipcode" value={recipientDetails.zipcode} onChange={handleChange} />
        </label>
        <button type="submit">Submit Recipient Details</button>
      </form>
    </div>
  );
};

export default OrderDetailsPage;



