import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";


export const fetchCartData = () => {
  return async (dispatch) => {
    dispatch(uiActions.showNotification({
      open: true,
      type: 'warning',
      message: 'Sending Request',
    }));
    const fetchHandler = async () => {
      const res = await fetch('https://redux-http-test-default-rtdb.firebaseio.com/cartItems.json');
      const data = await res.json();
      return data;
    }
    try {
      const cartData = await fetchHandler();
      dispatch(cartActions.replaceData(cartData));
    } catch (error) {
      dispatch(uiActions.showNotification({
        open: true,
        type: 'error',
        message: 'Sending Request Failed'
      }));
    }
  };
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(uiActions.showNotification({
      open: true,
      type: 'warning',
      message: 'Sending Request',
    }));
    const sendRequest = async () => {
      const res = await fetch('https://redux-http-test-default-rtdb.firebaseio.com/cartItems.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      });
      const data = await res.json();
      dispatch(uiActions.showNotification({
        open: true,
        type: 'success',
        message: 'Sent Request To Database Successful',
      }))
    };
    try {
      sendRequest();
    } catch (error) {
      dispatch(uiActions.showNotification({
        open: true,
        type: 'error',
        message: 'Sending Request Failed'
      }));
    }
  };
};