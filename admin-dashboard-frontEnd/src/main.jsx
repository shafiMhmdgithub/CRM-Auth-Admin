import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Auth0Provider
    domain="dev-p6arx0wsubtjlkzd.us.auth0.com"
    clientId="6HaGdISzWLDeuc2BZ3bkIir0eWS1x9fi"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
   
  </StrictMode>,
)
