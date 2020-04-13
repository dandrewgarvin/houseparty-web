/**
 * @author Andrew Garvin
 * @timestamp April 12, 2020
 * @copyright ControlBit Studios 2020. All rights reserved.
 */

import React, { useCallback } from 'react';

import { API, Queries } from '../services/NetworkManager';

import Button from '../components/atoms/Button';

function Home({ context }) {
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
    }
  }, [context]);

  return (
    <section id="Home">
      <Button action={getUser} label="Get User" />
    </section>
  );
}

export default Home;
