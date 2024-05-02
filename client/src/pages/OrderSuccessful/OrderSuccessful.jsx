function OrderSuccessful() {
    return (
        <div className="order-successful">
          <h1>Order Successful!</h1>
          <p>Your order has been placed successfully.</p>
          <p>Thank you for shopping with us!</p>
          <button onClick={() => window.location.href = '/'}>Continue Shopping</button>
        </div>
      );
    
}

export default OrderSuccessful