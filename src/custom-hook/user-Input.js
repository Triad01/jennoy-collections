import { useState } from "react";

const useInput = (value) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputFieldIsTouched, setInputFieldIsTouched] = useState(false);

  const enteredValueIsValid = value(enteredValue);
  const enteredValueIsInValid = !enteredValueIsValid && inputFieldIsTouched;

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setInputFieldIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setInputFieldIsTouched(false);
  };

  return {
    userValue: enteredValue,
    isValid: enteredValueIsValid,
    isInValid: enteredValueIsInValid,
    reset,
    inputChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
