import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import styles from "./BagListItem.module.css";
import BagItemForm from "./BagItemForm";

const BagListItems = (props) => {
  // const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCartHandler = (quantity) => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        name: props.name,
        price: props.price,
        quantity: quantity,
        total: props.price,
      })
    );
  };
  const price = props.price.toFixed(2);
  const formattedPrice = new Intl.NumberFormat().format(price);

  return (
    <li className={styles.baglist}>
      <div className={styles["baglist-image"]}>
        <img src={props.image} alt="bag item here" />
      </div>
      <div className={styles["baglist-container"]}>
        <h1 className={styles["baglist-name"]}>{props.name}</h1>
        <h2 className={styles["baglist-price"]}>&#x20A6;{formattedPrice}</h2>
        <h2 className={styles["baglist-description"]}>{props.description}</h2>

        <div className={styles["itemForm-wrapper"]}>
          <BagItemForm id={props.id} onAddToCart={addToCartHandler} />
        </div>
      </div>
    </li>
  );
};

export default BagListItems;
