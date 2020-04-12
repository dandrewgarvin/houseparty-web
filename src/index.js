import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import history from './utils/history';

import { StateProvider } from './services/Store';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <Router history={history}>
        <App />
      </Router>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
