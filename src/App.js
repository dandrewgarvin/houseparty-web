import React from 'react';
import { Switch } from 'react-router-dom';

import history from './utils/history';

import PermissionHandler from './services/PermissionHandler';

import './styles/main.scss';

function App() {
  const RouteHandler = new PermissionHandler({ id: 'user:7' }, history);

  return (
    <main id="App">
      <Switch>{RouteHandler.generateRoutes()}</Switch>
    </main>
  );
}

export default App;
