import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const NavLinksAuth = () => (
  <Fragment>
    <NavLink
      className="btn btn-info ml-3"
      activeClassName="btn-outline-info"
      exact
      to="/createaccount"
      title="Create an Account"
    >
      Create an Account
    </NavLink>
    <NavLink
      className="btn btn-primary ml-3"
      activeClassName="btn-outline-primary"
      exact
      to="/signin"
      title="Sign In"
    >
      Sign In
    </NavLink>
  </Fragment>
);

export default NavLinksAuth;
