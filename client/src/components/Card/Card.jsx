import React from 'react';
import './Card.scss';


function Card({ title,imageUrl }) {
    return (
        <div className='card'>
             {imageUrl && <img src={imageUrl} alt={title}/>} {/* Render the image if imageUrl is provided */}
            <div>
            <p className='card__title'>{title}</p> 
            </div>
        </div>
    );
}

export default Card;