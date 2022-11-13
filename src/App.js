import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from './components/Notification'
import { fetchCartData, sendCartData } from "./store/cart-actions";

let isFirstRender = true;

function App() {
  const cart = useSelector(state => state.cart);
  const isAuthLogin = useSelector(state => state.auth.isAuthLogin);
  const notification = useSelector(state => state.ui.notification);

  const dispatch = useDispatch();

  useEffect(() => {
    if (cart.changed) {
      dispatch(fetchCartData());
    }
  }, [dispatch]);

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch])

  return (
    <div className="App">
      {notification && <Notification type={notification.type} message={notification.message} />}
      {!isAuthLogin && <Auth />}
      {isAuthLogin && <Layout />}
    </div>
  );
}

export default App;
