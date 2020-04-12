/**
 * @author Andrew Garvin
 * @timestamp April 12, 2020
 * @copyright ControlBit Studios 2020. All rights reserved.
 */

// ========== INITIAL STATE ========= //
const initialUserState = {
  user: {
    id: 'user:7',
  },
};

// ========== ACTION TYPES ========== //
const userActions = {
  ADD_USER: 'ADD_USER',
};

const userReducer = (state, action) => {
  switch (action.type) {
    case userActions.ADD_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      throw new Error(`Error in User Reducer Action: ${action.type}`);
  }
};

export { userReducer, initialUserState, userActions };
