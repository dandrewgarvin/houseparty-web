/**
 * @author Andrew Garvin
 * @timestamp April 12, 2020
 * @copyright ControlBit Studios 2020. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as HousePartyLogo } from '../../images/logo.svg';

function Logo({ modifier, action }) {
  return <HousePartyLogo onClick={action} className={`Logo${modifier ? `--${modifier}` : ''}`} />;
}

Logo.propTypes = {
  modifier: PropTypes.string,
  action: PropTypes.func,
};

export default Logo;
