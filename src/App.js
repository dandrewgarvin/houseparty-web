import React, { useContext } from 'react';
import { Switch } from 'react-router-dom';

import routes from './config/routes';

import history from './utils/history';

import PermissionHandler from './services/PermissionHandler';
import { store } from './services/Store';

import { Header } from './components';

import './styles/main.scss';

function App() {
  const context = useContext(store);

  const RouteHandler = new PermissionHandler(context.state, history);

  return (
    <main id="App">
      <Header user={context.state.user} />

      <Switch>{RouteHandler.generateRoutes({ context, routes })}</Switch>
    </main>
  );
}

export default App;
