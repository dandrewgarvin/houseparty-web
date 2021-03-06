/**
 * @author Andrew Garvin
 * @timestamp April 12, 2020
 * @copyright ControlBit Studios 2020. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';

function Button({ action, label, modifiers, className }) {
  return (
    <button
      className={`Button ${modifiers ? modifiers.map(mod => `Button--${mod}`).join(' ') : ''}${
        className ? ` ${className}` : ''
      }`}
      onClick={action}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  action: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  modifiers: PropTypes.array,
  className: PropTypes.string,
};

export default Button;
