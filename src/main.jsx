import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Auth0Provider
      domain="basantbharati.us.auth0.com"
      clientId="pAqkqTfjGLYarZl6lcnHOddMOaDvSoTF"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    > */}
      <App />
    {/* </Auth0Provider> */}
  </React.StrictMode>
)
