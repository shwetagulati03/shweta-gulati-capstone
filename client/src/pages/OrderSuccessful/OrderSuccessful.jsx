import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";


function OrderSuccessful() {
    return (
        <div className="order-successful">
          <h1>Order Successful!</h1>
          <p>Your order has been placed successfully.</p>
          <p>Thank you for shopping with us!</p>
          <Button>
          <Link to="/">Continue Shopping</Link>
          </Button>
        </div>
      );
    
}

export default OrderSuccessful