/* eslint-disable no-unused-vars */
import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./components/contexts/AuthContext.jsx";
createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-nos2hoyizfy6nwr4.us.auth0.com"
    clientId="FtzImyfqM9iaQoVb4vR28O5epA0UI2mW"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <AuthProvider>
      <App />
    </AuthProvider>
  </Auth0Provider>
);
