// import React, { createContext } from 'react';

// const CartContext = createContext({
//   cartItems: [],
//   addToCart: () => {},
//   removeFromCart: () => {},
// });

// export default CartContext;



// import React, { createContext } from 'react';

// const CartContext = createContext({
//   cartItems: [],
//   addToCart: () => {},
//   removeFromCart: () => {},
// });

// export default CartContext;


import  { createContext } from 'react';

const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  totalPrice: 0,
});

export default CartContext;

