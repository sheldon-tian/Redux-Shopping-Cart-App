import React from "react";
import Header from "./Header";
import Products from "./Products";
import CartItems from './CartItems'
import "./Layout.css";
import { useSelector } from "react-redux";
const Layout = () => {
  const { showCart, itemsList } = useSelector(state => state.cart);
  let total = 0;
  itemsList.forEach(item => {
    total += item.total;
  });
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        <div className="total-price">
          <h3>Total: ${total}</h3>
          {showCart && <CartItems />}
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
