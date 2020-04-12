/**
 * @author Andrew Garvin
 * @timestamp April 12, 2020
 * @copyright ControlBit Studios 2020. All rights reserved.
 */

const permissions = (user, state) => {
  return {
    user: {
      auth: () => {
        if (user) {
          return true;
        }

        return false;
      },
    },
    event: {
      host: event_id => {
        const event = state.events.find(evnt => evnt.id === event_id);

        if (event && event.host_id === user.id) {
          return true;
        }

        return false;
      },
      member: event_id => {
        const event = state.events.find(evnt => evnt.id === event_id);

        if (event && event.members.find(member => member.id === user.id)) {
          return true;
        }

        return false;
      },
    },
  };
};

export default permissions;
