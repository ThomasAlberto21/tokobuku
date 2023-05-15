import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Product from './pages/products';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const globalState = {
  totalOrder: 0,
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
    <React.StrictMode>
      <Provider store={store}>
        <Product />
      </Provider>
    </React.StrictMode>
  </div>
);
