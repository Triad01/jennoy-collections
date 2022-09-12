import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { FaStar } from "react-icons/fa";
import BagItemForm from "./BagItemForm";
import classes from "./FeaturedBagItem.module.css";

const FeaturedBagItem = (props) => {
  const dispatch = useDispatch();
  const addToCartHandler = (enteredAmount) => {
    dispatch(
      cartActions.addItemToCart({
        name: props.name,
        price: props.price,
        id: props.id,
        quantity: enteredAmount,
      })
    );
  };
  return (
    <div className={classes.wrap}>
      <li id={props.id} className={classes["featured__item"]}>
        <img
          className={classes["featured__image"]}
          alt="featured product pics"
          src={props.image}
        ></img>
        <div className={classes["featured__item--description"]}>
          <h3>{props.name}</h3>
          <div className={classes["featured__item--review"]}>
            <p className={classes["featured__item--availability"]}>
              Available now
            </p>
            <p className={classes["featured__item--price"]}>
              &#x20A6;{props.price}
            </p>
          </div>
          <div className={classes["featured__item--rating"]}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className={classes.action}>
            <BagItemForm id={props.id} onAddToCart={addToCartHandler} />
          </div>
        </div>
      </li>
    </div>
  );
};

export default FeaturedBagItem;
