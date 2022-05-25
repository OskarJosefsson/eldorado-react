import { React, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../UI/Header";
import classes from "./NavbarBottom.module.css"
const NavbarBottom = () => {

    return (
        <Fragment>
          <nav className={classes.navbot}>
            <div className={classes.links}>
              <Link className={classes.linkcategory}  to="/">Browse Categories</Link>
              <Link className={classes.link} to="/">Home</Link>
              <Link className={classes.link} to="/Shop">Shop</Link>
              <Link className={classes.link} to="/Shoppingcart">Shoppingcart</Link>
            </div>
            <div className={classes.empty}></div>
          </nav>
          <Header />
        </Fragment>
    );
};

export default NavbarBottom;