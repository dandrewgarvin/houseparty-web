import React, { useContext } from 'react';
import { Switch } from 'react-router-dom';

import history from './utils/history';

import PermissionHandler from './services/PermissionHandler';
import { store } from './services/Store';

import './styles/main.scss';

function App() {
  const context = useContext(store);

  const RouteHandler = new PermissionHandler(context.state, history);

  return (
    <main id="App">
      <Switch>{RouteHandler.generateRoutes({ context })}</Switch>
    </main>
  );
}

export default App;
