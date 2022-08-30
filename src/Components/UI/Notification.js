import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import styles from "./Notification.module.css";

const Notification = (props) => {
  const dispatch = useDispatch();

  const closeNotificationHandler = () => {
    dispatch(uiActions.closeNotification());
  };
  let specialClasses = "";

  if (props.status === "Error") {
    specialClasses = styles.error;
  }
  if (props.status === "Success") {
    specialClasses = styles.success;
  }

  const cssStyles = `${styles.notification} ${specialClasses}`;

  return (
    <div className={cssStyles}>
      <h2>{props.status}</h2>
      <p>{props.message}</p>
      <button className={styles.close} onClick={closeNotificationHandler}>
        &#215;
      </button>
    </div>
  );
};

export default Notification;
