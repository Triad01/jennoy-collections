import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartIcon from "../cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
// import BagContext from "../../store/Bag-context";

const HeaderCartButton = (props) => {
  const numberOfItems = useSelector((state) => state.cart.totalQuantity);
  const cartItems = useSelector((state) => state.cart.items);
  const [activatedButtonStyle, setActivatedButtonStyle] = useState(false);
  // const bagContext = useContext(BagContext);
  // const { items } = bagContext;
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

  // const numberOfItems = cartItems.items.reduce((curNum, num) => {
  //   return curNum + num.quantity;
  // }, 0);

  const buttonStyles = `${styles.button} ${
    activatedButtonStyle ? styles.bump : ""
  }`;

  return (
    <button className={buttonStyles} onClick={props.onClick}>
      <CartIcon />
      <span className={styles.items}>Your Items</span>
      <span className={styles.amount}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
