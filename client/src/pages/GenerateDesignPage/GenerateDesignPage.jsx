import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function GenerateDesignPage() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const {productId} = useParams();
  const [textInput, setTextInput] = useState('');
  const [generatedDesign, setGeneratedDesign] = useState('');
  const [finalDesign, setFinalDesign] = useState(null);
  const [showUploadedImage, setShowUploadedImage] = useState(false);

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
  const addToCart = () => {
    // to do
    console.log('Final design added to cart:', finalDesign);
  };

  return (
    <div className="generatepage">
      <h1>Customize Your Design</h1>
      <div className="left-panel">
        <h2>Upload Image</h2>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <h2>Create Design from Text</h2>
        <textarea value={textInput} onChange={handleTextInputChange} rows={4} cols={50} />
        <button onClick={generateDesignFromText}>Generate Design from Text</button>
      </div>
    
      <div className="right-panel">
      {showUploadedImage && uploadedImage && (
          <img src={uploadedImage} alt="Design" style={{ maxWidth: '200px' }} />
        )}
        {!showUploadedImage && generatedDesign && (
          <img src={generatedDesign} alt="Design" style={{ maxWidth: '200px' }} />
        )}
        <button onClick={addToCart}>Add to Cart</button>
      </div>
      </div>

     );
  
};

export default GenerateDesignPage;