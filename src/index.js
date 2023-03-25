import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { persistor, store } from 'redux/store';
import { App } from 'components/App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="23857398733-guoutqeoq2rsiu48n9rc4eem5beo26op.apps.googleusercontent.com">
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="kapusta-project">
          <App />
        </BrowserRouter>
      </PersistGate>
    </GoogleOAuthProvider>
  </Provider>
);
