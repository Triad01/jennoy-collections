import styles from "./CartListItem.module.css";
const CartListItem = (props) => {
  const price = props.price.toFixed(2);

  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>&#x20A6; {price}</span>
          <span className={styles.quantity}>x {props.quantity}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartListItem;
