/**
 * @author Andrew Garvin
 * @timestamp April 12, 2020
 * @copyright ControlBit Studios 2020. All rights reserved.
 *
 * @description This is the global context manager. It simply combines all the reducers (and their individual state) into a single set of objects served through the context API. Each individual reducer file manages it's own state, and should not touch the state of other reducers.
 *
 * @note When adding additional reducers, follow the numbered steps in the comments below.
 */

import React, { createContext, useReducer } from 'react';

// ============ REDUCERS ============ //
// STEP 1: import the new reducer with it's unique reducer, state, and actions
import { userReducer, initialUserState, userActions } from './reducers/userReducer';
import { eventReducer, initialEventState, eventActions } from './reducers/eventReducer';

// ========== STATE PROVIDER ======== //
const store = createContext();
const { Provider } = store;

const StateProvider = ({ children }) => {
  // STEP 2: create an actual reducer with the new imports
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);
  const [eventState, eventDispatch] = useReducer(eventReducer, initialEventState);

  // STEP 3: add the imported state to global state
  const state = {
    ...userState,
    ...eventState,
  };

  const dispatch = action => {
    // STEP 4: add an additional `else if` case to handle dispatch routing for the new dispatcher
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
