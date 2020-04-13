/**
 * @author Andrew Garvin
 * @timestamp April 12, 2020
 * @copyright ControlBit Studios 2020. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../atoms/Logo';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import Image from '../atoms/Image';

function Header({ user }) {
  return (
    <header className={`Header${user ? ' Header--inverted' : ''}`}>
      <Logo
        action={() => {
          console.log('clicked logo');
        }}
        modifier={user ? 'inverted' : null}
      />

      {user ? (
        <div className="Header__actions">
          <Text label={user.name} modifiers={['inverted']} />

          <Image src={user.profileImageUrl} modifiers={['rounded']} className="ml-10" />
        </div>
      ) : (
        <div className="Header__actions">
          <Button
            action={() => {
              console.log('clicked login');
            }}
            label="Login"
            modifiers={['inverted', 'max-height']}
          />

          <Button
            action={() => {
              console.log('clicked create party');
            }}
            label="Create a Party"
            modifiers={['max-height']}
          />
        </div>
      )}
    </header>
  );
}

Header.propTypes = {
  user: PropTypes.object,
};

export default Header;
