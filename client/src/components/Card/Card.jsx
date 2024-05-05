import React from 'react';
import './Card.scss';


function Card({ title,imageUrl }) {
    return (
        <div className='card'>
             <img className='card__img' src={imageUrl} alt={title}></img>
            <div>
            <p className='card__title'>{title}</p> 
            </div>
        </div>
    );
}

export default Card;