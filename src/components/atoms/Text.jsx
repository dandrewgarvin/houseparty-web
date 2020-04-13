/**
 * @author Andrew Garvin
 * @timestamp April 12, 2020
 * @copyright ControlBit Studios 2020. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';

function Text({ action, label, modifiers, className }) {
  return (
    <p
      className={`Text ${modifiers ? modifiers.map(mod => `Text--${mod}`).join(' ') : ''}${
        className ? ` ${className}` : ''
      }`}
      onClick={action}
    >
      {label}
    </p>
  );
}

Text.propTypes = {
  action: PropTypes.func,
  label: PropTypes.string.isRequired,
  modifiers: PropTypes.array,
  className: PropTypes.string,
};

export default Text;
