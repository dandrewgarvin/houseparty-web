/**
 * @author Andrew Garvin
 * @timestamp April 12, 2020
 * @copyright ControlBit Studios 2020. All rights reserved.
 */

import React, { useCallback } from 'react';

import { API, Queries } from '../services/NetworkManager';

import Button from '../components/atoms/Button';
import Text from '../components/atoms/Text';

import { ReactComponent as Party } from '../images/party.svg';

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
      <div className="grid grid__left">
        <div className="grid__backdrop">
          <p className="grid__backdrop__text">A better way to</p>
          <p className="grid__backdrop__text">
            create <span className="grid__backdrop__text--rotating">parties</span>
          </p>
        </div>

        <div className="grid__text__container">
          <Text
            label="HouseParty is a revolutionary service that enables you to take your party management game to the next level."
            className="mb-20"
            modifiers={['text-lg', 'text-center']}
          />

          <Text
            label="Create parties with absolute ease, invite guests directly from your contact book or facebook friends list, draft custom text invites, and send premium physical invitations, complete with tea-stained paper and wax seals"
            modifiers={['text-lg', 'text-center']}
          />
        </div>
      </div>
      <div className="grid grid__right">
        <Party className="grid__image" />
      </div>
      <div className="grid grid__bottom">
        <div className="grid__bottom--container">
          <Button action={getUser} label="Get Started" modifiers={['max-height']} />
        </div>
      </div>
    </section>
  );
}

export default Home;
