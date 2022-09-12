import { Fragment } from "react";

import { FaArrowRight } from "react-icons/fa";

import classes from "./About.module.css";

const About = () => {
  return (
    <Fragment>
      <body>
        <header className={classes["header"]}>
          <div className={classes["header__upper"]}>
            <h1>Welcome to Jennoy collections.</h1>

            <p>
              We are all about bags. we make and design the best quality bags
            </p>
          </div>

          <div className={classes["header__lower"]}></div>
        </header>
        <main className={classes.service}>
          <div className={classes.container}>
            <div className={classes.service__wrap}>
              <h2>WHAT WE DO ?</h2>
              <p>
                Jennnoy collection specializes at making and designing quality
                bags that sstisfies the needs of our clients. We are very much
                flexible with respect to woring with designs from our clients
                and we ensuren their desgign tastes are met and all products
                delivered in due time
              </p>
            </div>

            <div className={classes["service__items"]}>
              <h2>Our Services</h2>
              <li>
                <FaArrowRight className={classes.icon} /> Making and designing
                bags
              </li>
              <li>
                <FaArrowRight className={classes.icon} />
                providing custom designs for clients
              </li>
              <li>
                <FaArrowRight className={classes.icon} /> Design Rebranding
              </li>
              <li>
                <FaArrowRight className={classes.icon} /> Design Design
                maintenance
              </li>
              <li>
                <FaArrowRight className={classes.icon} /> Bag remake
              </li>
            </div>
          </div>
          <div className={classes["service__advantages"]}>
            <h2>Our Advantages</h2>
            <div>Wholesale Services</div>
            <div>Retail Services</div>
            <div>Fast and reliable delivery</div>
            <div>Durable and quality bags</div>
            <div>Affordble and pocket friendy</div>
            <div>Delivery Nation-wide</div>
            <div>24/7 services</div>
          </div>
        </main>
      </body>
    </Fragment>
  );
};

export default About;
