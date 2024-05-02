import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ProductListingPage from './pages/ProductListing/ProductListing';
import ProductDescriptionPage from './pages/ProductDescriptionPage/ProductDescriptionPage';
import GenerateDesignPage from './pages/GenerateDesignPage/GenerateDesignPage';
import OrderSuccessful from './pages/OrderSuccessful/OrderSuccessful';
import OrderDetailsPage from './pages/OrderDetailsPage/OrderDetailsPage';

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/category/:categoryId" element={<ProductListingPage/>} />
        <Route path="/products/:productId" element={<ProductDescriptionPage/>} />
        <Route path="/products/:productId/generate" element={<GenerateDesignPage/>} />
        <Route path="/orders/:orderId" element={<OrderDetailsPage/>} />
        <Route path="/order-success" element={<OrderSuccessful/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
