    import React, { useEffect } from 'react';
    import Hero from '../../components/Hero/Hero';
    import Card from '../../components/Card/Card';
    import './HomePage.scss';
    import { Link } from 'react-router-dom';
    import { useState } from 'react';
    import axios from 'axios';


    const HomePage = () => {
        const [data, setData] = useState([]);
        const fetchData = async () => {
            try {
                console.log(localStorage.getItem("authToken"));
                const response = await axios.get(`http://localhost:8080/category`);
                setData(response.data);
                
            } catch (error) {
                console.error(`Error fetching data: ${error}`);
            }
        }
    
        useEffect(() => {
            fetchData();
        }, []);
        console.log(data);
        return (
            <div className="homepage">
                {/* Render the Header component */}
                <Hero /> {/* Render the Hero component */}

                <h1 className='homepage__h1'>SHOP BY CATEGORY</h1>
                <div className="card-layout">
                    {/* Render cards dynamically */}

                    {data.map((card) => (
                        <Link to={`/category/${card.id}`} key={card.id}>
                            <Card  
                            title={card.name} 
                             imageUrl= "https://digicsd.com/uploads/imgpsh_fullsize_anim.png"
                             //{card.url} 
                            >
                        
                        </Card>
                        </Link>
                    ))}
                </div>
            
            </div>
        );
    };

    export default HomePage;