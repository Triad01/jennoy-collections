import classes from "./Contact.module.css";
import { Fragment } from "react";
const Contact = () => {
  return (
    <Fragment>
      <section className={classes["contact__intro"]}>
        <h1>Anytime, anywhere, we are only a message away </h1>
        <p>It's very easy to connect with us whenever you wish</p>
      </section>
      <section className={classes["contact__form"]}>
        <h2>Contact us</h2>
        <p>We are always happy to hear from you</p>

        <form className={classes["form"]}>
          <div className={classes["form-group"]}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Enter your name" />
          </div>
          <div className={classes["form-group"]}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="email@email.com" />
          </div>
          <div className={classes["form-group"]}>
            <label htmlFor="mobile">Mobile</label>
            <input id="mobile" type="mobile" placeholder="+000 1234567" />
          </div>
          <div className={classes["form-group"]}>
            <label htmlFor="city">City</label>
            <input id="city" type="text" />
          </div>
          <div className={classes["form-group"]}>
            <label htmlFor="message">Message</label>
            <textarea rows="5" cols="42" id="message" type="text"></textarea>
          </div>
          <div className={classes.cta}>
            <button className={classes.submit}>send</button>
          </div>
        </form>
      </section>
    </Fragment>
  );
};

export default Contact;
