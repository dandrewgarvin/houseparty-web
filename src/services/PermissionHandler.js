/**
 * @author Andrew Garvin
 * @timestamp April 12, 2020
 * @copyright ControlBit Studios 2020. All rights reserved.
 */

import React from 'react';
import { Redirect, matchPath } from 'react-router-dom';

import routes from '../routes';
import permissionFunctions from '../utils/permissions';

class PermissionHandler {
  constructor(user, history) {
    this.user = user;
    this.history = history;

    this.state = {
      events: [
        {
          id: 'event:123',
          host_id: 'user:7',
          members: [{ id: 'user:7' }],
        },
      ],
    };
  }

  generateRoutes = () => {
    // map over each route object, and render either the public component or private component
    // based on whether all the permission requirements are met or not.
    return Object.values(routes).map(Route => ({
      path: Route.path,
      component: props => {
        if (this.checkPermissions(Route, props)) {
          return <Route.privateComponent />;
        } else {
          return Route.publicComponent ? (
            <Route.publicComponent />
          ) : (
            <Redirect to={routes.Home.path} />
          );
        }
      },
    }));
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
      const perms = permissionFunctions(this.user, this.state); // TODO: change how this.state is passed in

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
