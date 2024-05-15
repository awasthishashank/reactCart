import React, { useContext } from 'react';
import CartContext from '../../store/CartContext';

const CartSections = (props) => {
  const { cartItems } = useContext(CartContext);
  
  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const handlePurchase =()=>{
    alert("Items purchsed successfully")
  }

  return (
    <>
      <h2>CART</h2>
      <button className="cancel">X</button>
      <div className="cart-row cart-header">
        <span className='cart-item cart-column'>ITEM</span>
        <span className='cart-price cart-column'>PRICE</span>
        <span className='cart-quantity cart-column'>QUANTITY</span>
      </div>
      <div className='cart-items'>
        {cartItems.map((item, index) => (
          <div className="cart-row" key={index}>
            <span className='cart-item cart-column'>{item.title}</span>
            <span className='cart-price cart-column'>{item.price}</span>
            <span className='cart-quantity cart-column'>{item.quantity}</span>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <span>
          <span className='total-title'><strong>Total</strong></span>
          ${totalPrice}
        </span>
      </div>
      <button className='purchase-btn' type='button' onClick={handlePurchase}>PURCHASE</button>
    </>
  );
}

export default CartSections;
