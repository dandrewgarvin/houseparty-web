/**
 * @author Andrew Garvin
 * @timestamp April 12, 2020
 * @copyright ControlBit Studios 2020. All rights reserved.
 */

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { store } from '../services/Store';

function Dashboard() {
  const context = useContext(store);

  return (
    <section id="Dashboard">
      <h1>Dashboard Section</h1>
      <Link to="/events/event:123">Events</Link>
      <button
        onClick={() => {
          context.dispatch({
            type: 'ADD_USER',
            payload: {
              id: 'user:7',
            },
          });
        }}
      >
        Add User
      </button>
      <p>{JSON.stringify(context.state.user)}</p>
    </section>
  );
}

export default Dashboard;
