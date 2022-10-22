import React, { useContext } from 'react';
import './App.css';
import ListProducts from './components/ListProducts';
import AppProvider from './providers';
import CartProvider from './providers/Cart';

function App() {


  return (
    <AppProvider>
      <CartProvider>
        <ListProducts/>
      </CartProvider>
    </AppProvider>
  );
}

export default App;
