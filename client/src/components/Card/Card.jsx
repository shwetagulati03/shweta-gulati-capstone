import React from 'react';
import './Card.scss';


function Card({ children,imageUrl,categoryName }) {
    return (
        <div className='card'>
             {imageUrl && <img src={imageUrl} />} {/* Render the image if imageUrl is provided */}
            <div className="card-content">{children}
            <p>{categoryName}</p> 
            </div>
        </div>
    );
}

export default Card;