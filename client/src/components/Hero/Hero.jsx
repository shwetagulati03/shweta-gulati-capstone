import './Hero.scss';
import image1 from '../../assets/images/hero-1.png';
import image2 from '../../assets/images/hero-1.png';
import image3 from '../../assets/images/hero-1.png';

export default function Hero() {
    const sliderImages = [image1, image2, image3];
    
    return (
        <div className="hero__container">
             {/* { <div className="hero__content">
                <div className="hero__slider">
                <img src={image1} alt="Static Image" className="hero__slider--image" />
                <SimpleSlider images={sliderImages} />
                </div>
            </div>        } */}
            
        </div>
    )
}
