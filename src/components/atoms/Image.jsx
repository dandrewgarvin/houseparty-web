/**
 * @author Andrew Garvin
 * @timestamp April 12, 2020
 * @copyright ControlBit Studios 2020. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';

function Image({ src, alt, modifiers, className, action }) {
  return (
    <img
      className={`Image ${modifiers ? modifiers.map(mod => `Image--${mod}`).join(' ') : ''}${
        className ? ` ${className}` : ''
      }`}
      src={src || ''}
      alt={alt}
      onClick={action}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  modifiers: PropTypes.array,
  className: PropTypes.string,
  action: PropTypes.func,
};

export default Image;
