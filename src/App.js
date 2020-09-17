import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router';
import { Link } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Product from './Product';

function NotFound() {
  return <div>Url Not Found</div>
}

function App() {
  return (
    <div>
      <h1>Welcome</h1>
      <div>
        <Link to="/">Home</Link> {' '}
        <Link to="About">About</Link>

      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="About" element={<About />}></Route>
        <Route path="product/:productId" element={<Product />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
