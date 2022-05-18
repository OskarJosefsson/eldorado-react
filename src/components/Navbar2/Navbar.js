import React from "react";
import NavbarTop from "./NavbarTop";
import NavbarMid from "./NavbarMid";
import NavbarBottom from "./NavbarBottom";

const Navbar = ({ instance }) => {
  return (
    <React.Fragment>
      <div>
        <NavbarTop ></NavbarTop>
      </div>
      <div>
        <NavbarMid instance={instance}></NavbarMid>
      </div>
      <div>
        <NavbarBottom></NavbarBottom>
      </div>
    
    </React.Fragment>
  );
};

export default Navbar;
