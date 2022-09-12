import MainNavigation from "./MainNavigation";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={classes.header}>
      <MainNavigation />
      <div className={classes["header__description"]}>
        <h1>Designer Handbags.</h1>
        <p>
          Shop for Designer Handbags, tote bags, travel bags and lot more at
          affordable and discount prices.
        </p>

        <Link to="/collection" className={classes.btn}>
          Shop all &rarr;
        </Link>
      </div>
    </header>
  );
};

export default Header;
