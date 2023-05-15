import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cart from './pages/Cart';
import Product from './pages/Product';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const globalState = {
  totalOrder: 1,
};

// Reducer
const rootReducer = (state = globalState, action) => {
  if (action.type === 'PLUS_ORDER') {
    return {
      ...state,
      totalOrder: state.totalOrder + 1,
    };
  }

  if (action.type === 'MINUS_ORDER') {
    let totalOrder = 0;
    if (state.totalOrder > 0) {
      totalOrder = state.totalOrder - 1;
    }
    return {
      ...state,
      totalOrder: totalOrder,
    };
  }
  return state;
};

// Store
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='App px-10'>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </div>
);
