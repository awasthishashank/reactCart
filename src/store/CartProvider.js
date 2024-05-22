import React, { useState } from 'react';
import CartContext from './CartContext';

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};











// import React, { createContext, useReducer } from 'react';
// import CartContext from './CartContext';

// // Define action types
// const ADD_TO_CART = 'ADD_TO_CART';
// const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// // Define initial state
// const initialState = {
//   cartItems: []
// };

// // Reducer function
// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       const existingItemIndex = state.cartItems.findIndex(item => item.id === action.product.id);
//       if (existingItemIndex !== -1) {
//         const updatedCartItems = [...state.cartItems];
//         updatedCartItems[existingItemIndex].quantity += 1;
//         return { ...state, cartItems: updatedCartItems };
//       } else {
//         return { ...state, cartItems: [...state.cartItems, { ...action.product, quantity: 1 }] };
//       }
//     case REMOVE_FROM_CART:
//       return {
//         ...state,
//         cartItems: state.cartItems.filter(item => item.id !== action.productId)
//       };
//     default:
//       return state;
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, initialState);

//   // Action creators
//   const addToCart = (product) => {
//     dispatch({ type: ADD_TO_CART, product });
//   };

//   const removeFromCart = (productId) => {
//     dispatch({ type: REMOVE_FROM_CART, productId });
//   };

//   return (
//     <CartContext.Provider value={{ cartItems: state.cartItems, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
