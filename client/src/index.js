import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientid = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
      <Auth0Provider
        domain = "dev-1fyaiu1fyfi5tx0a.us.auth0.com"
        clientId = "Y31cWbCKGSwAh3iGVbdqSPMZBfOgaeLf"
        redirectUri={window.location.origin}
      >
        <App/>
      </Auth0Provider>
    </Router>
);