import { Fragment } from "react";
import { useMsal } from "@azure/msal-react";
import { b2cPolicies } from "../authConfig";

const Account = () => {
  const { instance } = useMsal();

  return (
  <Fragment>
    <button onClick={() => instance.logoutPopup({postLogoutRedirectUri: "/",mainWindowRedirectUri: "/",})}>Logout</button>
    <button onClick={() => instance.loginPopup(b2cPolicies.authorities.editProfile)}>Edit profile</button>
  </Fragment>
  );
};

export default Account;
