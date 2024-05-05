import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ProductListingPage from './pages/ProductListing/ProductListing';
import ProductDescriptionPage from './pages/ProductDescriptionPage/ProductDescriptionPage';
import GenerateDesignPage from './pages/GenerateDesignPage/GenerateDesignPage';
import OrderSuccessful from './pages/OrderSuccessful/OrderSuccessful';
import OrderDetailsPage from './pages/OrderDetailsPage/OrderDetailsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import { Navigate } from 'react-router-dom';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("authToken"));
  
  useEffect(() => {

    const token = localStorage.getItem('authToken');
    console.log(token);
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  console.log(isLoggedIn);
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
        <Route path="/home" element={<HomePage/>}></Route>
        <Route path="/category/:categoryId" element={<ProductListingPage/>} />
        <Route path="/products/:productId" element={<ProductDescriptionPage/>} />
        <Route path="/products/:productId/generate" element={<GenerateDesignPage/>} />
        <Route path="/orders/:orderId" element={<OrderDetailsPage/>} />
        <Route path="/order-success" element={<OrderSuccessful/>} />
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <LoginPage setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
