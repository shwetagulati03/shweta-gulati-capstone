import React from 'react';
import './ProductDescriptionPage.scss';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Button2 from '../../components/Button2/Button2';


function ProductDescriptionPage() {
  const {productId} =useParams();
  const [product, setProduct] = useState('');
  const fetchProduct = async () => {
    try {
        console.log("try");
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


  return (
    <div className="product">
            <div className='product__imglayout'>
              <img className='product__imglayout--img'  src={product.url} />
            </div>
            <div className="product__details">
                <h2 className="product__name">{product.name}</h2>
                <p className="product__price">CAD {product.price}</p>
                <p className="product__description">{product.description}</p>
                <div className='button-wrapper'><Button>Place Order</Button></div>
                 <p className="product__description"></p>
                 <div className='button-wrapper'>
                  <Link to= {`/products/${productId}/generate`} > <Button2>Customize</Button2></Link></div>
                <p className="product__description">* By just paying 35% extra </p>
            </div>
        </div>
  )
}

export default ProductDescriptionPage