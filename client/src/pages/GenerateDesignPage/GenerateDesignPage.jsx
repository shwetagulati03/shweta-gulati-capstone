import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './GenerateDesignPage.scss';
import Button from '../../components/Button/Button';

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
          <button className='generatepage__right--place' onClick={addToCart}>PLACE ORDER</button>
        </div>
      </div>
    </div>
  );
};

export default GenerateDesignPage;