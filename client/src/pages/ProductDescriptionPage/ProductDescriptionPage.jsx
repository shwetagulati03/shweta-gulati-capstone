import React from 'react';
import Card from '../../components/Card/Card';
import './ProductDescriptionPage.scss';

function ProductDescriptionPage({ name, imageUrl, description, price }) {
    // addToCart = () => {
       
    // };


  return (
    <div className="product">
            <Card className="product__card">
                <img src="https://via.placeholder.com/1000" alt={name} className="product-image" />
            </Card>
            <div className="product__details">
                <h2 className="product__name">WHITE MUG</h2>
                <p className="product__price">$5</p>
                <p className="product__description">"One Personalised Mug
Material- Ceramic
Dimensions- Height: 4 inches & Diameter: 3 inches
Colour- White
Capacity- Can hold liquid upto 325 ml
For personalisation, please provide us with 1 Image.
Net Quantity: 1 Unit
Country Of Origin: India"</p>
                <button className="add-to-cart-btn" >Add to Cart</button>
                <button className="add-to-cart-btn" >Customize Product</button>
            </div>
        </div>
  )
}

export default ProductDescriptionPage