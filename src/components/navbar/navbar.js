import React from "react";
import NavbarTop from "./navbar-top";
import NavbarMid from "./navbar-mid";
import NavbarBottom from "./navbar-bottom";

const navbarCustom = () => {
  return (
    <React.Fragment>
      <div>
        <NavbarTop></NavbarTop>
      </div>
      <div>
        <NavbarMid></NavbarMid>
      </div>
      <div>
        <NavbarBottom></NavbarBottom>
      </div>
    </React.Fragment>
  );
};

export default navbarCustom;
