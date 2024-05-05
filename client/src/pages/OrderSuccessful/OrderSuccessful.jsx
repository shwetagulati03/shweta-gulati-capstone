import Button from "../../components/Button/Button";
import { Link } from "react-router-dom"; 
import './OrderSuccessful.scss';


function OrderSuccessful() {
    return (
        <div className="order-successful">
          <div className="order-successful__msg">
          <h1 className="order-successful__msg--title">Order Successful!</h1>
          <p className="order-successful__msg--text">Your order has been placed successfully.</p>
          <p className="order-successful__msg--text">Thank you for shopping with us!</p>
          <Link to="/">
              <Button>Continue Shopping</Button>
            </Link>
          </div>
        </div>
      );
    
}

export default OrderSuccessful