import { Fragment } from "react";
import MainNavigation from "./MainNavigation";

const NavWrapper = (props) => {
  return (
    <Fragment>
      <MainNavigation showModal={props.showModal} />
    </Fragment>
  );
};

export default NavWrapper;
