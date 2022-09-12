import { useSelector, useDispatch } from "react-redux";
import React, { Fragment, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./Components/layout/Layout";
import NavWrapper from "./Components/layout/NavWrapper";
import Bags from "./Components/Bags/Bags";
import Cart from "./Components/cart/Cart";
import { sendCartData } from "./store/cart-actions";
import Notification from "./Components/UI/Notification";
import { fetchCartData } from "./store/cart-actions";

//pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { uiActions } from "./store/ui-slice";
import Collection from "./pages/Collection";
import Footer from "./Components/layout/Footer";
import AvailableBagPack from "./Components/Bags/AvailableBagPacks";
import AvailableTravelBags from "./Components/Bags/AvailableTravelBags";
import AvailableWaistBags from "./Components/Bags/AvailableWaistBags";

let initial = true;

function App() {
  const dispatch = useDispatch();
  const modalIsShowns = useSelector((state) => state.ui.showModal);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

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

  const closeModalHandler = () => {
    dispatch(uiActions.showModal());
  };

  return (
    <Fragment>
      {notification && !modalIsShowns && (
        <Notification
          status={notification.status}
          message={notification.message}
          title={notification.title}
        />
      )}

      {modalIsShowns && <Cart onClose={closeModalHandler} />}

      <NavWrapper />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Layout />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/collection" exact>
          <Collection />
        </Route>
        <Route path="/collection/tote-bags">
          <Bags />
        </Route>

        <Route path="/collection/bag-pack">
          <AvailableBagPack />
        </Route>

        <Route path="/collection/waist-bag">
          <AvailableWaistBags />
        </Route>
        <Route path="/collection/travel-bags">
          <AvailableTravelBags />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Fragment>
  );
}
export default App;
