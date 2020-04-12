/**
 * @author Andrew Garvin
 * @timestamp April 12, 2020
 * @copyright ControlBit Studios 2020. All rights reserved.
 */

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import ViewEvent from '../pages/ViewEvent';
import CreateEvent from '../pages/CreateEvent';

const routes = {
  Home: {
    publicComponent: Home,
    privateComponent: Dashboard,
    permissions: ['user:auth'],
    path: '/',
  },
  Login: {
    publicComponent: Login,
    privateComponent: null,
    permissions: null,
    path: '/login',
  },
  Register: {
    publicComponent: Register,
    privateComponent: null,
    permissions: null,
    path: '/register',
  },
  CreateEvent: {
    publicComponent: null,
    privateComponent: CreateEvent,
    permissions: ['user:auth'],
    path: '/events/new',
  },
  ViewEvent: {
    publicComponent: null,
    privateComponent: ViewEvent,
    permissions: ['user:auth', 'event:host', 'event:member'],
    path: '/events/:id',
  },
};

export default routes;
