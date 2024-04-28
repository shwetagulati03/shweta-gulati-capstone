import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import './ProductListing.scss';
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductListingPage = () => {
    const {categoryId} =useParams();
    const [products, setProducts] = useState([]);
    const [categoryName, setCategoryName] = useState('');
        const fetchProducts = async () => {
            try {
                
                const response = await axios.get(`http://localhost:8080/category/${categoryId}`);
                console.log(response);
                setProducts(response.data);
                setCategoryName(response.data[0].category_name); 
            } catch (error) {
                console.error(`Error fetching data: ${error}`);
            }
        }
    
        useEffect(() => {
            fetchProducts();
        }, [categoryId]);
      
        

    return (
        <div className="product-listing-page">
            <h1>{categoryName}</h1>
            <div className="product-list">
                {/* Render products */}
                {products.map(product => (
                     <Link to={`/products/${product.id}`} key={product.id}>
                                <Card key={product.id} title={product.name} imageUrl={product.url} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProductListingPage;