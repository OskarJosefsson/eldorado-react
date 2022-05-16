import { useEffect, React, Fragment } from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate, MsalProvider } from "@azure/msal-react";
import { loginRequest, b2cPolicies } from "../../authConfig";
import { EventType, InteractionType } from "@azure/msal-browser";
import { Link } from "react-router-dom";

const NavbarTop = ({ instance }) => {
  useEffect(() => {
    const callbackId = instance.addEventCallback((event) => {
      if (event.eventType === EventType.LOGIN_FAILURE) {
        if (event.error && event.error.errorMessage.indexOf("AADB2C90118") > -1) {
          if (event.interactionType === InteractionType.Redirect) {
            instance.loginRedirect(b2cPolicies.authorities.forgotPassword);
          } else if (event.interactionType === InteractionType.Popup) {
            instance.loginPopup(b2cPolicies.authorities.forgotPassword)
              .catch(e => {
                return;
              });
          }
        }
      }

      if (event.eventType === EventType.LOGIN_SUCCESS || event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS) {
        if (event?.payload) {
          /**
           * We need to reject id tokens that were not issued with the default sign-in policy.
           * "acr" claim in the token tells us what policy is used (NOTE: for new policies (v2.0), use "tfp" instead of "acr").
           * To learn more about B2C tokens, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/tokens-overview
           */
          // if (event.payload.idTokenClaims["acr"] === b2cPolicies.names.forgotPassword) {
          //   window.alert("Password has been reset successfully. \nPlease sign-in with your new password.");
          //   return instance.logout();
          // } else if (event.payload.idTokenClaims["acr"] === b2cPolicies.names.editProfile) {
          //   window.alert("Profile has been edited successfully. \nPlease sign-in again.");
          //   return instance.logout();
          // }
        }
      }
    });

    return () => {
      if (callbackId) {
        instance.removeEventCallback(callbackId);
      }
    };
  }, [instance]);

  const handleLogin = () => {
      instance.loginPopup(loginRequest)
          .catch((error) => console.log(error))
  };
  return (
    <MsalProvider instance={instance}>
      <Fragment>
        <Link to="/">Home</Link>
        <Link to="/Wishlist">Wishlist</Link>
        <Link to="/Shoppingcart">Shoppingcart</Link>
        <Link to="/Products">Products</Link>
        <UnauthenticatedTemplate>
          <button onClick={handleLogin}>Login</button>
        </UnauthenticatedTemplate>
        <AuthenticatedTemplate>
          <button onClick={() => instance.logoutPopup({postLogoutRedirectUri: "/",mainWindowRedirectUri: "/",})}>Logout</button>
        </AuthenticatedTemplate>
      </Fragment>
    </MsalProvider>
  );
};

export default NavbarTop;