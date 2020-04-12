/**
 * @author Andrew Garvin
 * @timestamp April 12, 2020
 * @copyright ControlBit Studios 2020. All rights reserved.
 */

import React, { useCallback } from 'react';

import { API, Queries } from '../services/NetworkManager';

function Home({ context, history, routes }) {
  const getUser = useCallback(async () => {
    const response = await API.query({
      query: Queries.GET_USER,
      variables: {
        email: 'dandrewgarvin@gmail.com',
        password: 'password',
      },
    });

    const user = response.data.getUser;

    if (user) {
      await context.dispatch({ type: 'ADD_USER', payload: user });

      history.push(routes.Home.path);
    }
  }, []);

  return (
    <section id="Home">
      <h1>Home Section</h1>

      <button onClick={getUser}>Get User</button>
    </section>
  );
}

export default Home;
