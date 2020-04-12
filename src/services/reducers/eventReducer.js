/**
 * @author Andrew Garvin
 * @timestamp April 12, 2020
 * @copyright ControlBit Studios 2020. All rights reserved.
 */

// ========== INITIAL STATE ========= //
const initialEventState = {
  events: [],
};

// ========== ACTION TYPES ========== //
const eventActions = {
  ADD_EVENT: 'ADD_EVENT',
};

const eventReducer = (state, action) => {
  switch (action.type) {
    case eventActions.ADD_EVENT:
      return {
        ...state,
        events: [...initialEventState.events, action.payload],
      };

    default:
      throw new Error(`Error in Event Reducer Action: ${action.type}`);
  }
};

export { eventReducer, initialEventState, eventActions };
