import React from "react";
import {  useMsal, useAccount } from "@azure/msal-react";
import { loginRequest, protectedResources } from "../authConfig";
const Wishlist = () => {

  const { instance, accounts, inProgress } = useMsal();
  const account = useAccount(accounts[0] || {});


 
   var token = instance.acquireTokenSilent({
        scopes: protectedResources.apiHello.scopes,
        account: account
       
    })
    console.log(token)
  return (
    <React.Fragment>
      <div>Wishlist</div>
    </React.Fragment>
  );
};
export default Wishlist;
