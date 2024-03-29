import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from '../src/context/user.context';
// import { ShopProvider } from './context/product.context';
// import { ProductsProvider } from  '../src/context/product.context';
import { CategoryProvider } from './context/product.context';

import { CartProvider } from './context/cart.content';

import { PersistGate } from 'redux-persist/integration/react';  
import { persistStore_ } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter >
    <Provider store={store} >
      {/* <UserProvider> */}
        {/* <CategoryProvider > */}
          {/* <CartProvider > */}
          <PersistGate loading={null} persistor={persistStore_} >
            <App />
          </PersistGate>
          {/* </CartProvider> */}
        {/* </CategoryProvider> */}
        </Provider>
      {/* </UserProvider> */}
     </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
