import React from 'react';

import NavLinksHome from './NavLinksHome';
import MeQuery from './MeQuery';

const Navbar = () => (
  <nav className="navbar navbar-expand-sm navbar-light bg-light">
    <NavLinksHome />
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <MeQuery />
      </ul>
    </div>
  </nav>
);

export default Navbar;
