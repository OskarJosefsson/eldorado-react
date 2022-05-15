import React from "react";
import NavbarTop from "./NavbarTop";
import NavbarMid from "./NavbarMid";
import NavbarBottom from "./NavbarBottom";
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from '../../authConfig';

const msalInstance = new PublicClientApplication(msalConfig);

const Navbar = () => {

  return (
    <React.Fragment>
      <div>
        <NavbarTop instance={msalInstance}></NavbarTop>
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

export default Navbar;
