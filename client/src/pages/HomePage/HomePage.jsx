    import React from 'react';
    import Header from '../../components/Header/Header';
    import Hero from '../../components/Hero/Hero';
    import Card from '../../components/Card/Card';
    import './HomePage.scss';
    import ProductListingPage from '../ProductListing/ProductListing';
    import { Link } from 'react-router-dom';


    const HomePage = () => {

        const cardsData = [
            { title: "MUGS", imageUrl:"https://images.deepai.org/art-image/38e6c97ffeb54881b14a17ffb246a8a4/photo-frames-17eeb6.jpg"},
            { title: "TSHIRTS", imageUrl:"https://images.deepai.org/art-image/e49de637a8a849ca9beb1d1a73679a48/i-need-to-create-a-mugs-category-for-my-site.jpg" },
            { title: "PILLOWS", imageUrl:"https://images.deepai.org/art-image/e49de637a8a849ca9beb1d1a73679a48/i-need-to-create-a-mugs-category-for-my-site.jpg" },
            { title: "PHOTO FRAMES", imageUrl:"https://images.deepai.org/art-image/38e6c97ffeb54881b14a17ffb246a8a4/photo-frames-17eeb6.jpg" },
        ];
        return (
            <div className="homepage">
                {/* Render the Header component */}
                <Hero /> {/* Render the Hero component */}
                <div className="card-layout">
                    {/* Render cards dynamically */}

                    {cardsData.map((card, index) => (
                        <Link to={`ProductListingPage`}>
                            <Card key={index} title={card.title} imageUrl={card.imageUrl} categoryName={card.title}>
                        
                        </Card>
                        </Link>
                    ))}
                </div>
            
            </div>
        );
    };

    export default HomePage;