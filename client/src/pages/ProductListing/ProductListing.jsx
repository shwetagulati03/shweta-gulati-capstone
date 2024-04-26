import Card from "../../components/Card/Card";
import './ProductListing.scss';

const ProductListingPage = () => {
    // Static product data for demonstration
    const products = [
        { id: 1, name: "Product 1", imageUrl: "https://via.placeholder.com/150" },
        { id: 2, name: "Product 2", imageUrl: "https://via.placeholder.com/150" },
        { id: 3, name: "Product 3", imageUrl: "https://via.placeholder.com/150" },
        { id: 4, name: "Product 1", imageUrl: "https://via.placeholder.com/150" },
        { id: 5, name: "Product 2", imageUrl: "https://via.placeholder.com/150" },
        // { id: 6, name: "Product 3", imageUrl: "https://via.placeholder.com/150" },
        // { id: 7, name: "Product 1", imageUrl: "https://via.placeholder.com/150" },
        // { id: 8, name: "Product 2", imageUrl: "https://via.placeholder.com/150" },
        // { id: 9, name: "Product 3", imageUrl: "https://via.placeholder.com/150" },
        // { id: 10, name: "Product 1", imageUrl: "https://via.placeholder.com/150" },
        // { id: 11, name: "Product 2", imageUrl: "https://via.placeholder.com/150" },
        // { id: 12, name: "Product 3", imageUrl: "https://via.placeholder.com/150" },
        // Add more products as needed
    ];

    return (
        <div className="product-listing-page">
            <h1>Any Products</h1>
            <div className="product-list">
                {/* Render products */}
                {products.map(product => (
                    <Card key={product.id} title={product.name} imageUrl={product.imageUrl} />
                ))}
            </div>
        </div>
    );
};

export default ProductListingPage;