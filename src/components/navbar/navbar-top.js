import React from "react";
import { Link } from "react-router-dom";

const navbarTop = () => {
  return (
    <React.Fragment>
      <Link to="/">Home</Link>
      <Link to="/Wishlist">Wishlist</Link>
      <Link to="/Shoppingcart">Shoppingcart</Link>
      <Link to="/Products">Products</Link>
    </React.Fragment>
  );
};

export default navbarTop;
