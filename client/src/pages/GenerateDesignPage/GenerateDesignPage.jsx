import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './GenerateDesignPage.scss';
import Button from '../../components/Button/Button';
import { useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import { resizer } from 'react-image-file-resizer';


function GenerateDesignPage() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const {productId} = useParams();
  const [textInput, setTextInput] = useState('');
  const [generatedDesign, setGeneratedDesign] = useState('');
  const [finalDesign, setFinalDesign] = useState(null);
  const [showUploadedImage, setShowUploadedImage] = useState(false);
  const [orderData, setOrderData] = useState(null);
  const [product, setProduct] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/products/${productId}`);
      const productData = response.data[0];
    console.log('Product Data:', productData);
    setProduct(productData);
    console.log('Product State:', product);
    console.log('Product Price:', productData.price); 
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (event) => {
      setUploadedImage(event.target.result);
      setShowUploadedImage(true);
      setGeneratedDesign('');
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleTextInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const generateDesignFromText = async () => {
    console.log(textInput);
    try {
      //to do
    const data = {
    output_url: "https://picsum.photos/200/300"
     };
        // console.log("about to hit");
        // const response = await axios.post('http://localhost:8080/generate', { text: textInput }, {
        //     headers: {
        //       'Content-Type': 'application/json'
        //     }
        //   });
        //const data = await response.data;
          console.log(data);
    setGeneratedDesign(data.output_url); 
    setFinalDesign(data.output_url);
    setShowUploadedImage(false);
      setUploadedImage('');
    } catch (error) {
      console.error('Error generating design:', error);
    }
  };
  const addToCart = async() => {

    if (!product) {
      await fetchProductDetails();
    }
    if (!showUploadedImage && !generatedDesign) {
      alert('Please upload an image or generate a design before placing the order.');
      return;
    }
    console.log(product.price);
    let orderTotal=0;
    let orderType=0;
    let customURL="";
    let image_data="";
    const modified_price=parseInt(product.price)+5;
    if (showUploadedImage) {
      orderTotal = product ? modified_price : 0;
      image_data = uploadedImage;
      orderType = 2; 
    } else if (generatedDesign) {
      orderTotal = product ? modified_price : 0; 
      orderType = 3; 
      customURL=generatedDesign;
    } else {
      orderTotal = product ? product.price : 0; 
      orderType = 1; 
    }
    const items=[
      {
      product_id: product.id,
      quantity: 1,
      price: orderTotal,
      custom_url: customURL,
      image_data: image_data, 
      order_type: orderType
      }
    ]
    const orderData = {
      user_id: "1",
      recipient_id: "1",
      order_total: orderTotal,
      items: items
    };
  
    try{
    console.log('Final design added to cart:', finalDesign);
    console.log(orderData.order_total);
    alert('Total for the order:', parseInt(orderData.order_total));
    
    const response = await axios.post(`http://localhost:8080/orders`, orderData);
    console.log('Order placed successfully:', response.data);
    navigate('/order-success'); 
    }
    catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <div className="generatepage">
      <h1>Create or Upload Your Design</h1>
        <div className='generatepage__panels'>
            <div className="generatepage__left">
               <h2 className='generatepage__left--h2'>Upload your own design</h2>
               <div className='generatepage__left--upload'>
                  <input className="generatepage__left--upload-input" type="file" accept="image/*" onChange={handleImageUpload} />
                <Button>Upload Image</Button></div>
               <h2 className='generatepage__left--h2'>Create Design from Text</h2>
              <textarea className='generatepage__left--text' value={textInput} onChange={handleTextInputChange} />
               <button className='generatepage__left--button' onClick={generateDesignFromText}>Generate Design from Text</button>
            </div>
    
            <div className="generatepage__right">
          <div className={showUploadedImage ? "generatepage__right--img" : "generatepage__right--img-placeholder"}>
            {showUploadedImage && uploadedImage && (
              <img src={uploadedImage} alt="Design" style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
            )}
            {!showUploadedImage && generatedDesign && (
              <img src={generatedDesign} alt="Design"style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
            )}
          </div>
          <Button onClick={addToCart}>PLACE ORDER</Button>
        </div>
      </div>
    </div>
  );
};

export default GenerateDesignPage;