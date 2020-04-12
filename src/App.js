import React from 'react';
import { Switch, Route } from 'react-router-dom';

import history from './utils/history';

import PermissionHandler from './services/PermissionHandler';

import './styles/main.scss';

function App() {
  const RouteHandler = new PermissionHandler({ id: 'user:7' }, history);

  const routes = RouteHandler.generateRoutes();

  return (
    <main id="App">
      <Switch>
        {routes.map((route, index) => {
          return <Route exact key={index} path={route.path} component={route.component} />;
        })}
      </Switch>
    </main>
  );
}

export default App;
