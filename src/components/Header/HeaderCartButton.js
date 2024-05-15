import React, { useContext } from 'react';
import classes from './HeaderCartButton.module.css';
import { Link } from 'react-router-dom';
import CartContext from '../../store/CartContext';

const HeaderCartButton = (props) => {
  const { cartItems } = useContext(CartContext);

  // Calculate total quantity
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link to="/cart">
      <button className={classes.button}>
        Cart<span className={classes.badge}>{totalQuantity}</span>
      </button>
    </Link>
  );
};

export default HeaderCartButton;
