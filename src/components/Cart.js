import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import "./Cart.css";
const Cart = () => {
  const dispatch = useDispatch();
  const { totalQuantity } = useSelector(state => state.cart);

  const handleShowCart = () => {
    dispatch(cartActions.setShowCart());
  }
  return (
    <div className="cartIcon">
      <h3 onClick={handleShowCart}>Cart: {totalQuantity} Items</h3>
    </div>
  );
};

export default Cart;
