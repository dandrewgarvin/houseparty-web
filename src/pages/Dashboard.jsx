/**
 * @author Andrew Garvin
 * @timestamp April 12, 2020
 * @copyright ControlBit Studios 2020. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <section id="Dashboard">
      <h1>Dashboard Section</h1>
      <Link to="/events/event:123">Events</Link>
    </section>
  );
}

Dashboard.propTypes = {};

export default Dashboard;
