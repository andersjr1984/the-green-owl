import React, { useState, createContext } from 'react';
import PageDisplay from './Components/PageDisplay';

import 'bootstrap/dist/css/bootstrap.css';

export const Cart = createContext();

const App = () => {
  const [profile, setPro] = useState(null);
  const [userId, setUID] = useState(null);
  const [cart, setCart] = useState([]);


  return (
    <Cart.Provider value={{ cart, setCart }}>
      <PageDisplay />
    </Cart.Provider>
  );
};

export default App;
