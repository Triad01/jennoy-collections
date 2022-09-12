import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ToggleIconOpen from "./ToggleIconOpen";
import ToggleIconClose from "./ToggleIconClose";
// import LogoIcon from "./LogoIcon";
import classes from "./MainNavigation.module.css";
import HeaderCartButton from "./HeaderCartButton";

const MainNavigation = (props) => {
  const [menuIsShown, setMenuIsShown] = useState(false);
  const hideMenuHandler = () => {
    setMenuIsShown((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className={classes.nav}>
      {/* <LogoIcon className={classes.logo} /> */}
      <h1 className={classes.logo}>Jennoy collections</h1>
      <HeaderCartButton onClick={props.showModal} />
      {menuIsShown && (
        <nav className={classes["nav__list"]}>
          <ul className={classes["nav__list"]}>
            <li>
              <NavLink onClick={hideMenuHandler} to="/home">
                <span>
                  <FaHome className={classes.icon} /> Home
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={hideMenuHandler} to="/collection">
                Collections
              </NavLink>
            </li>
            <li>
              <NavLink onClick={hideMenuHandler} to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink onClick={hideMenuHandler} to="/contact">
                Contact us
              </NavLink>
            </li>
          </ul>
        </nav>
      )}

      <nav className={classes["nav__list--desktop"]}>
        <ul className={classes["nav__list"]}>
          <li>
            <NavLink activeClassName={classes.active} to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      {!menuIsShown && (
        <ToggleIconOpen
          onClick={hideMenuHandler}
          className={classes["mobile-nav-toggle"]}
        />
      )}
      {menuIsShown && (
        <ToggleIconClose
          onClick={hideMenuHandler}
          className={classes["mobile-nav-toggle--close"]}
        />
      )}
    </div>
  );
};

export default MainNavigation;
