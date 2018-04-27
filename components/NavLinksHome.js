import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const NavLinksHome = () => (
  <Fragment>
    <NavLink
      className="navbar-brand"
      activeClassName="active"
      exact
      to="/"
      title="Yelpnight"
    >
      <img
        src="https://res.cloudinary.com/fbnt/image/upload/c_scale,w_24/v1523968294/yelpnight_yqhrq4.png"
        width="24"
        height="24"
        alt=""
      />
      Yelpnight
    </NavLink>
    <NavLink
      className="btn btn-success"
      activeClassName="btn-outline-success"
      exact
      to="/"
      title="Home"
    >
      <i className="fas fa-home" />
    </NavLink>
  </Fragment>
);

export default NavLinksHome;
