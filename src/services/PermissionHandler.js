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
            return <Route.privateComponent {...props} {...additionalProps} />;
          } else {
            return Route.publicComponent ? (
              <Route.publicComponent {...props} {...additionalProps} />
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

    for (let permission of permissions) {
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

      // user does not have permissions. end loop early since the rest of the permissions don't matter
      if (!result) {
        return false;
        // TODO: if we modify the component to return an object with which permissions were met and which weren't, that allows us to use the checkPermissions function _inside_ routes to enable them to conditionally render elements.
        // an example of this would be the ViewEvent page, which would display an edit button for the host, but not for normal members. The page, on render, would check to see if the object returned by checkPermissions contains `event:host`, and if it's true. in that case, show the edit
        // return {
        //   'user:auth': true,
        //   'event:host': false
        // }
      }
    }

    // the user has met all of the requirements for the route
    return true;
  };
}

export default PermissionHandler;
