import styles from "./Button.module.css";

const Button = (props) => {
  const btnStyle = `${props.className} ${styles.button}`;
  return <button className={btnStyle}>{props.children}</button>;
};

export default Button;
