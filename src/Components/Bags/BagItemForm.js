import React, { useRef, useState } from "react";
import Input from "../UI/Input";
import styles from "./BagItemForm.module.css";
import Button from "../UI/Button";

const BagItemForm = (props) => {
  const [enteredNumberIsValid, setEnteredNumberIsValid] = useState(true);
  const quantityInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = quantityInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setEnteredNumberIsValid(false);
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <Input
        ref={quantityInputRef}
        label="Quantity"
        input={{
          id: "quantity_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button>Add to cart</Button>
      {!enteredNumberIsValid && <p>pls enter a valid amount (1-5)</p>}
    </form>
  );
};

export default BagItemForm;
