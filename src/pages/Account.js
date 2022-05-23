import { useAccount, useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";
import { b2cPolicies } from "../authConfig";

import classes from "./Account.module.css";

const Account = () => {
  const { instance, accounts } = useMsal();
  const { name, username } = accounts[0];
  const { streetAddress, postalCode, city} = accounts[0].idTokenClaims;
  const [ user, setUser ] = useState({});

  return (
    <div className={classes.info}>
        <strong>{user.name}</strong>
        <p><strong>Email:</strong> {username}</p>
        <p><strong>Street:</strong> {streetAddress}</p>
        <p><strong>Postal Code:</strong> {postalCode}</p>
        <p><strong>City:</strong> {city}</p>
        <button className={classes.btn} onClick={() => instance.logoutPopup({postLogoutRedirectUri: "/",mainWindowRedirectUri: "/",})}>Logout</button>
        <button className={classes.btn} onClick={() => instance.loginPopup(b2cPolicies.authorities.editProfile)}>Edit profile</button>
    </div>
  );
};

export default Account;
