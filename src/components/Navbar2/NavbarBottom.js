import { React, Fragment } from "react";
import { Link } from "react-router-dom";

const NavbarBottom = () => {

    return (
        <Fragment>
          <Link to="/">Home</Link>
          <Link to="/Shop">Shop</Link>
          <Link to="/Products">Products</Link>
          <Link to="/Wishlist">Wishlist</Link>
          <Link to="/Shoppingcart">Shoppingcart</Link>
        </Fragment>
    );
};

export default NavbarBottom;