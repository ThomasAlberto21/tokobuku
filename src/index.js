import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Product from './pages/products';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='App px-10'>
    <React.StrictMode>
      <Product />
    </React.StrictMode>
  </div>
);
