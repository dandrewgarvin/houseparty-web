/**
 * @author Andrew Garvin
 * @timestamp April 12, 2020
 * @copyright ControlBit Studios 2020. All rights reserved.
 */

import React from 'react';
import { Route, Redirect, matchPath } from 'react-router-dom';

import routes from '../config/routes';
import permissionFunctions from '../config/permissions';

class PermissionHandler {
  constructor(state, history) {
    this.state = state;
    this.history = history;
  }

  generateRoutes = additionalProps => {
    // map over each route object, and render either the public component or private component
    // based on whether all the permission requirements are met or not.
    return Object.values(routes)
      .map(Route => ({
        path: Route.path,
        component: props => {
          if (this.checkPermissions(Route, props)) {
            return <Route.privateComponent {...additionalProps} />;
          } else {
            return Route.publicComponent ? (
              <Route.publicComponent {...additionalProps} />
            ) : (
              <Redirect to={routes.Home.path} />
            );
          }
        },
      }))
      .map((route, index) => {
        return (
          <Route
            exact
            key={index}
            path={route.path}
            component={route.component}
            {...additionalProps}
          />
        );
      });
  };

  checkPermissions = (route, props) => {
    const { permissions } = route;

    if (!permissions) {
      return null;
    }

    // does user meet all requirements to access the route?
    let hasPermissions = true;

    permissions.forEach(permission => {
      const breakdown = permission.split(':');

      // run the permission function based on the permission type
      const perms = permissionFunctions(this.state);

      const match = matchPath(props.location.pathname, {
        path: props.match.path,
      });

      let result = undefined;

      if (match) {
        result = perms[breakdown[0]][breakdown[1]](match.params.id);
      } else {
        result = perms[breakdown[0]][breakdown[1]]();
      }

      if (!result) {
        hasPermissions = result;
      }
    });

    // if true, the generator function will render the private route because the user has all permissions
    return hasPermissions;
  };
}

export default PermissionHandler;
