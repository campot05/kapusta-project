import React from 'react';
import ReactDOM from 'react-dom';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { persistor, store } from 'redux/store';
import { App } from 'components/App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="kapusta-project">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
