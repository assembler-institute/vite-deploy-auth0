import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from "./router/Router.tsx";
import {Auth0Provider} from "@auth0/auth0-react";

const {VITE_AUTH0_DOMAIN: domain, VITE_AUTH0_CLIENT_ID: clientId,VITE_AUTH0_AUDIENCE: audience} = import.meta.env
const redirectUri = window.location.origin + "/home"
console.log({redirectUri})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
            redirect_uri: redirectUri,
            audience: audience,
            returnTo: window.location.origin
        }}
    >
    <Router />
    </Auth0Provider>
  </React.StrictMode>,
)
