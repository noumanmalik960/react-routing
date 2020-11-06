import React from 'react';
import './App.css';

import { Routes, Route, useNavigate } from 'react-router';
// This useNavigate is used when we want to redirect to a specific page on a button click
import { Link } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Product from './Product';
import NotFound from './NotFound'

import ProductDetails from './ProductDetails';


// function NotFound() {
//   return <div>Url Not Found</div>
// }


function App() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome</h1>
      <div>
        <Link to="/">Home</Link> {' '}
        <Link to="products">Product</Link> {' '}
        <Link to="About">About</Link> {' '}
        <Link to="products/mobile">Mobile</Link> {' '}
        <Link to="products/laptop">Laptop</Link>
        <button onClick={ () => {
          navigate("/about");
        }}>
          Navigate to About page
        </button>
      
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="About" element={<About />}></Route>
        <Route path="products" element={<Product />}>
          <Route path="/" element={<ProductDetails />}></Route>
          <Route path=":productName" element={<ProductDetails />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
