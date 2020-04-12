/**
 * @author Andrew Garvin
 * @timestamp April 12, 2020
 * @copyright ControlBit Studios 2020. All rights reserved.
 */

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section id="Home">
      <h1>Home Section</h1>
      <Link to="/events/event:123">Events</Link>
    </section>
  );
}

export default Home;
