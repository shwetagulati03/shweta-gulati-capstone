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
                const accessToken=localStorage.getItem("authToken"); 
                console.log(localStorage.getItem("authToken"));
                axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
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
             
                <Hero /> 

                <h1 className='homepage__h1'>SHOP BY CATEGORY</h1>
                <div className='card-layout'>

                    {data.map((card) => (
                        <Link to={`/category/${card.id}`} key={card.id}>
                            <Card  
                            title={card.name} 
                             imageUrl= {card.url}
                            >
                        
                        </Card>
                        </Link>
                    ))}
                </div>
            
            </div>
        );
    };

    export default HomePage;