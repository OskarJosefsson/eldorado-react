import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./authConfig";

const root = ReactDOM.createRoot(document.getElementById("root"));
const msalInstance = new PublicClientApplication(msalConfig);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App instance={msalInstance} />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
