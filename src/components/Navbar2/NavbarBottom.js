import { React, Fragment } from "react";
import { Link } from "react-router-dom";
import classes from './NavbarMid.module.css';
const NavbarBottom = () => {

    return (
        <Fragment>
          <div className={classes.navbottom} >
          <Link to="/" className={classes.link}>Home</Link>
          <Link to="/Shop" className={classes.link}>Shop</Link>
          <Link to="/Products" className={classes.link}>Products</Link>
          <Link to="/Shoppingcart" className={classes.link}>Shoppingcart</Link>
          </div>
          </Fragment>

    );
};

export default NavbarBottom;