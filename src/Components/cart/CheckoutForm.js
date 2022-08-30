import useInput from "../../custom-hook/user-Input";

import styles from "./CheckoutForm.module.css";

const CheckoutForm = (props) => {
  const {
    userValue: enteredName,
    isValid: enteredNameIsValid,
    isInValid: enteredNameIsInValid,
    reset: resetNameInputFiled,
    inputChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    userValue: enteredAddress,
    isValid: enteredAddressIsValid,
    isInValid: enteredAddressIsInValid,
    reset: resetAdressInputFiled,
    inputChangeHandler: addressInputChangeHandler,
    inputBlurHandler: addressBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    userValue: enteredCity,
    isValid: enteredCityIsValid,
    isInValid: enteredCityIsInValid,
    reset: resetCityInputFiled,
    inputChangeHandler: cityInputChangeHandler,
    inputBlurHandler: cityBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    userValue: enteredPostalCode,
    isValid: enteredPostalCodeIsValid,
    isInValid: enteredPostalCodeIsInValid,
    reset: resetPostalCodeInputFiled,
    inputChangeHandler: postalCodeInputChangeHandler,
    inputBlurHandler: postalCodeBlurHandler,
  } = useInput((value) => value.trim().length === 5);

  // general form validity;
  let formIsValid;
  if (
    enteredNameIsValid &&
    enteredAddressIsValid &&
    enteredCityIsValid &&
    enteredPostalCodeIsValid
  )
    formIsValid = true;

  //   submit handler
  const orderSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    } else {
      props.onSubmitOrder({
        name: enteredName,
        address: enteredAddress,
        city: enteredCity,
        postalCode: enteredPostalCode,
      });
    }
    resetNameInputFiled();
    resetAdressInputFiled();
    resetCityInputFiled();
    resetPostalCodeInputFiled();
  };

  const btnConfirmClass = !formIsValid
    ? styles["btn-invalid"]
    : styles["btn-confirm"];

  return (
    <form className={styles.form} onSubmit={orderSubmitHandler}>
      <div className={styles["form-group"]}>
        <input
          className={styles["form-input"]}
          onChange={nameInputChangeHandler}
          onBlur={nameBlurHandler}
          id="name"
          type="text"
          name="name"
          placeholder="First name"
          value={enteredName}
          required
        />
        <label htmlFor="name">First name</label>
        {enteredNameIsInValid && (
          <p className={styles["error-text"]}>Pls enter a valid name!</p>
        )}
      </div>
      <div className={styles["form-group"]}>
        <input
          onChange={addressInputChangeHandler}
          onBlur={addressBlurHandler}
          id="address"
          type="text"
          name="address"
          placeholder="Address"
          value={enteredAddress}
          required
        />
        <label htmlFor="address"> Address</label>
        {enteredAddressIsInValid && (
          <p className={styles["error-text"]}>pls enter a valid address</p>
        )}
      </div>
      <div className={styles["form-group"]}>
        <input
          className={styles["form-input"]}
          onChange={cityInputChangeHandler}
          onBlur={cityBlurHandler}
          id="city"
          type="text"
          name="city"
          value={enteredCity}
          placeholder="City"
        />
        <label className={styles["form-label"]} htmlFor="city">
          City
        </label>
        {enteredCityIsInValid && (
          <p className={styles["error-text"]}>pls enter a valid city</p>
        )}
      </div>
      <div className={styles["form-group"]}>
        <input
          onChange={postalCodeInputChangeHandler}
          onBlur={postalCodeBlurHandler}
          id="postal"
          type="text"
          name="postal"
          value={enteredPostalCode}
          placeholder="Postal code"
        />
        <label htmlFor="postal">Postal code</label>
        {enteredPostalCodeIsInValid && (
          <p className={styles["error-text"]}>
            pls enter a valid postal code(5 characters long)
          </p>
        )}
      </div>
      <div className={styles.actions}>
        <button className={btnConfirmClass} disabled={!formIsValid}>
          Confirm
        </button>
        <button
          className={styles["btn-cancel"]}
          onClick={props.onClick}
          type="button"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
