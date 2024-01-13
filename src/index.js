import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShopConteztProvider from './Contezt/ShopContezt';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   <ShopConteztProvider>
   <App />
   </ShopConteztProvider>

  
);

