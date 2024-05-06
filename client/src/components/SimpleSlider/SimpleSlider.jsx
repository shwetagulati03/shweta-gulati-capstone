import React from 'react';
import Slider from 'react-slick';
import './SimpleSlider.scss';
import image1 from '../../assets/images/hero-1.png';
import image2 from '../../assets/images/hero-1.png';
import image3 from '../../assets/images/hero-1.png';

const SimpleSlider = ({images}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings} className="hero-slider">
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Slide ${index + 1}`} />
                </div>
            ))}
        </Slider>
    );
};

export default SimpleSlider;
