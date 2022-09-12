import { Link } from "react-router-dom";
import classes from "./Collection.module.css";
import { Fragment } from "react";
import colImg1 from "../assets/featured-img-1.jpg";
import colImg2 from "../assets/featured-img-2.jpg";
import colImg4 from "../assets/featured-img-4.jpg";
import colImg5 from "../assets/featured-img-5.jpg";

const Collection = () => {
  return (
    <Fragment>
      <section className={classes.collection}>
        <h1>Our collection</h1>

        <p>Shop quality bags from our different collections</p>
        <div className={classes["collection__wrapper"]}>
          <Link to="/collection/tote-bags" className={classes.btn}>
            <figure className={classes.figure}>
              <img
                className={classes["figure__image"]}
                src={colImg5}
                alt="bag pics here"
              ></img>
              <figcaption className={classes["figure__caption"]}>
                Tote bags
              </figcaption>
            </figure>
          </Link>
          <Link to="/collection/bag-pack" className={classes.btn}>
            <figure className={classes.figure}>
              <img
                className={classes["figure__image"]}
                src={colImg2}
                alt="bag pics here"
              ></img>
              <figcaption className={classes["figure__caption"]}>
                Bag-pack
              </figcaption>
            </figure>
          </Link>
          <Link to="/collection/waist-bag" className={classes.btn}>
            <figure className={classes.figure}>
              <img
                className={classes["figure__image"]}
                src={colImg4}
                alt="bag pics here"
              ></img>
              <figcaption className={classes["figure__caption"]}>
                waist bags
              </figcaption>
            </figure>
          </Link>
          <Link to="/collection/travel-bags" className={classes.btn}>
            <figure className={classes.figure}>
              <img
                className={classes["figure__image"]}
                src={colImg1}
                alt="bag pics here"
              ></img>
              <figcaption className={classes["figure__caption"]}>
                Travel bags
              </figcaption>
            </figure>
          </Link>
        </div>
      </section>
    </Fragment>
  );
};
export default Collection;
