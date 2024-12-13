import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <GoogleOAuthProvider clientId='21016094032-e7m7ob50f5hb0f1mqatgpd7sea20gce1.apps.googleusercontent.com'><App /></GoogleOAuthProvider>
  </BrowserRouter>
  </React.StrictMode>
);

