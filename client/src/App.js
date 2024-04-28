import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ProductListingPage from './pages/ProductListing/ProductListing';
import ProductDescriptionPage from './pages/ProductDescriptionPage/ProductDescriptionPage';


function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/category/:categoryId" element={<ProductListingPage/>} />
        <Route path="/products/:productId" element={<ProductDescriptionPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
