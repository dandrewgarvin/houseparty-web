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
    permissions: ['user:auth', 'event:member'],
    path: '/events/:id',
  },
  EditEvent: {
    // TODO: instead of default redirecting to the home page, can we add some sort of handler method that allows the developer to control the flow for accessing a private route? an example would be to have the user redirected to the login page, and after login take the user back to the private route and re-check permissions. if those permissions are not met again, _then_ we can route to the home page, or display a modal or something.
    publicComponent: null,
    privateComponent: ViewEvent,
    permissions: ['user:auth', 'event:host'],
    // TODO: the current problem with the permissions array is that all of the permissions have to be met in order to view the page. this could lead to problems where a page only needs certain sets of permissions to be rendered. an example is the EditEvent page, which is accessible by authenticated users who are either the host of the event, or a member in it, but they do not have to be both.
    // if we take an approach similar to prop-types, we can create multiple sets of permissions, and only one of them needs to be met in full in order to access the page.
    // additionally, instead of having strings (which are easily typo'd), could we have an object that matches the permissions.js schema full of enum-like constants that could be referenced in order to enlist the help of compilers and linters to quickly find mistakes that are made?
    // permission: oneOf([
    //     ['user:auth', 'event:host'],
    //     ['user:auth', 'event:member'],
    // ]),
    // permission: {
    //   user: 'auth',
    //   event: ['host', 'member']
    // },
    path: '/events/:id',
  },
};

export default routes;
