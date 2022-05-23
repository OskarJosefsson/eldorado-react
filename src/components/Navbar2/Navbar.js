import React from "react";
import NavbarTop from "./NavbarTop";
import NavbarMid from "./NavbarMid";
import NavbarBottom from "./NavbarBottom";
import classes from "./Navbar.module.css"

const Navbar = ({ instance }) => {
  return (
    <React.Fragment>
      <div className={classes.navbartop} >
        <NavbarTop ></NavbarTop>
      </div>
      <div className={classes.navbarmid}>
        <NavbarMid instance={instance}></NavbarMid>
      </div>
      <div className={classes.navbarbot}>
        <NavbarBottom></NavbarBottom>
      </div>
    </React.Fragment>
  );
};
 
export default Navbar;
