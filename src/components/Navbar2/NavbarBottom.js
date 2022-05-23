import { React, Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./NavbarBottom.module.css"
const NavbarBottom = () => {

    return (
        <Fragment>

          <Link className={classes.linkcategory}  to="/">Browse Categories</Link>
          <Link className={classes.link} to="/">Home</Link>
          <Link className={classes.link} to="/Shop">Shop</Link>
          <Link className={classes.link} to="/Products">Products</Link>
          <Link className={classes.link} to="/Shoppingcart">Shoppingcart</Link>
        
        </Fragment>
    );
};

export default NavbarBottom;