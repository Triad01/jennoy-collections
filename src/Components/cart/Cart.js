import React, { useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";
import CartListItem from "./CartListItem";
import BagContext from "../../store/Bag-context";
import CheckoutForm from "./CheckoutForm";
import { cartActions } from "../../store/cart-slice";

const Cart = (props) => {
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const itemsInCart = useSelector((state) => state.cart.items);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);
  const bagContext = useContext(BagContext);

  const totalAmountFormatted = new Intl.NumberFormat().format(totalAmount);
  const itemIsAvailable = itemsInCart.length > 0;

  const cartAddItemHandler = (item) => {
    const newItem = { ...item, quantity: 1 };
    dispatch(cartActions.addItemToCart(newItem));
  };

  const cartRemoveItemHandler = (id) => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const confirmBagHandler = () => {
    setIsOrdering(true);
  };

  const submitBagOrderHandler = (userData) => {
    setIsSubmitting(true);
    fetch(
      "https://jennoy-collections-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItem: bagContext.items,
        }),
      }
    );
    dispatch(cartActions.clearCart());
  };

  const cartItems = (
    <ul>
      {itemsInCart.map((item) => {
        return (
          <CartListItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onRemove={cartRemoveItemHandler.bind(null, item.id)}
            onAdd={cartAddItemHandler.bind(this, item)}
          />
        );
      })}
    </ul>
  );

  const itemNotAvailableContent = !itemIsAvailable && (
    <p className={styles["no-item"]}>
      No items yet. Add Items to cart to view your selected items.
      {itemsInCart && isOrdering && (
        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={props.onClose}>
            Close
          </button>
        </div>
      )}
    </p>
  );

  const itemAvailableContent = itemIsAvailable && (
    <div className={styles.total}>
      <span>Total Amount: &#x20A6; {totalAmountFormatted}</span>
    </div>
  );

  const modalCartActions = (
    <div className={styles.actions}>
      {!isOrdering && (
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
      )}

      {itemIsAvailable && !isOrdering && (
        <button onClick={confirmBagHandler} className={styles.button}>
          Order
        </button>
      )}
    </div>
  );

  const mainModalContent = (
    <React.Fragment>
      {cartItems}
      {itemNotAvailableContent}
      {itemAvailableContent}
      {modalCartActions}
      {isOrdering && itemIsAvailable && (
        <CheckoutForm
          onSubmitOrder={submitBagOrderHandler}
          onClick={props.onClose}
        />
      )}
    </React.Fragment>
  );

  return (
    <Modal onClick={props.onClose}>
      {!isSubmitting && mainModalContent}
      {isSubmitting && (
        <p className={styles.isSubmitting}>
          Order successful. We will contact you when your order is ready!
          <div className={styles.actions}>
            <button onClick={props.onClose}>Close</button>
          </div>
        </p>
      )}
    </Modal>
  );
};

export default Cart;
