import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import CartIcon from "../cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const dispatch = useDispatch();
  const numberOfItems = useSelector((state) => state.cart.totalQuantity);
  const cartItems = useSelector((state) => state.cart.items);
  const [activatedButtonStyle, setActivatedButtonStyle] = useState(false);

  useEffect(() => {
    if (cartItems.length === 0) {
      return;
    }
    setActivatedButtonStyle(true);
    const interval = setInterval(() => {
      setActivatedButtonStyle(false);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [cartItems]);

  const buttonStyles = `${styles.button} ${
    activatedButtonStyle ? styles.bump : ""
  }`;

  const showModalHandler = () => {
    dispatch(uiActions.showModal());
  };

  return (
    <button className={buttonStyles} onClick={showModalHandler}>
      <CartIcon />
      {/* <span className={styles.items}>Your Items</span> */}
      <span className={styles.amount}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
