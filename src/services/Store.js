/**
 * @author Andrew Garvin
 * @timestamp April 12, 2020
 * @copyright ControlBit Studios 2020. All rights reserved.
 */

import React, { createContext, useReducer } from 'react';

// REDUCERS
import { userReducer, initialUserState, userActions } from './reducers/userReducer';
import { eventReducer, initialEventState, eventActions } from './reducers/eventReducer';

// ========== STATE PROVIDER ======== //
const store = createContext();
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);
  const [eventState, eventDispatch] = useReducer(eventReducer, initialEventState);

  const state = {
    ...userState,
    ...eventState,
  };

  const dispatch = action => {
    if (userActions[action.type]) {
      return userDispatch(action);
    } else if (eventActions[action.type]) {
      return eventDispatch(action);
    }

    throw new Error(`Unable to find action type in reducers: ${action.type}`);
  };

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
