import { useSelector, useDispatch } from "react-redux";
import React, { useState, Fragment, useEffect } from "react";
import Header from "./Components/Header/Header";
import Bags from "./Components/Bags/Bags";
import Cart from "./Components/cart/Cart";
import { sendCartData } from "./store/cart-actions";
import Notification from "./Components/UI/Notification";
import { fetchCartData } from "./store/cart-actions";

let initial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const [modalIsShown, setModalIsShown] = useState("");

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [dispatch, cart]);

  const showModalHandler = () => {
    setModalIsShown(true);
  };
  const closeModalHandler = () => {
    setModalIsShown(false);
  };

  return (
    <Fragment>
      {notification && !modalIsShown && (
        <Notification
          status={notification.status}
          message={notification.message}
          title={notification.title}
        />
      )}
      <Header showModal={showModalHandler} />
      {modalIsShown && <Cart onClose={closeModalHandler} />}
      <Bags />
    </Fragment>
  );
}
export default App;
