/**
 * @author Andrew Garvin
 * @timestamp April 12, 2020
 * @copyright ControlBit Studios 2020. All rights reserved.
 */

const permissions = state => {
  return {
    user: {
      auth: () => {
        if (state.user) {
          return true;
        }

        console.log('You are not logged in');
        return false;
      },
    },
    event: {
      host: event_id => {
        const event = state.events.find(evnt => evnt.id === event_id);

        if (event && event.host_id === state.user.id) {
          return true;
        }

        console.log('You are not the host of that event');
        return false;
      },
      member: event_id => {
        const event = state.events.find(evnt => evnt.id === event_id);

        if (event && event.members.find(member => member.id === state.user.id)) {
          return true;
        }

        console.log('You are not a member of that event');
        return false;
      },
    },
  };
};

export default permissions;
