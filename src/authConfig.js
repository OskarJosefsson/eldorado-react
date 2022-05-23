import { LogLevel } from "@azure/msal-browser";

export const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_SignIn_Up",
        forgotPassword: "B2C_1_Reset_Password",
        editProfile: "B2C_1_Edit"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://azureadtommastery.b2clogin.com/azureADTomMastery.onmicrosoft.com/B2C_1_SignIn_Up/",
        },
        forgotPassword: {
            authority: "https://azureadtommastery.b2clogin.com/azureADTomMastery.onmicrosoft.com/B2C_1_Reset_Password/",
        },
        editProfile: {
            authority: "https://azureadtommastery.b2clogin.com/azureADTomMastery.onmicrosoft.com/B2C_1_Edit/"
        }
    },
    authorityDomain: "azureADTomMastery.b2clogin.com"
}

export const msalConfig = {
  auth: {
    clientId: "7f547446-ece9-44b5-9773-87eb29e9160a",
    authority: b2cPolicies.authorities.signUpSignIn.authority,
    knownAuthorities: [b2cPolicies.authorityDomain],
    redirectUri: "https://eldorado-shop.azurewebsites.net/",
    // redirectUri: "http://localhost:3000/",
    postLogoutRedirectUri: "/",
    navigateToLoginRequestUrl: false,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false, 
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
        }
      },
    },
  },
};

export const protectedResources = {
  apiHello: {
    // endpoint: "https://localhost:44395/WeatherForecast",
    scopes: [
      "https://azureADTomMastery.onmicrosoft.com/azureB2CAPI/fullAccess",
    ], 
  },
};

export const loginRequest = {
  scopes: [...protectedResources.apiHello.scopes],
};
