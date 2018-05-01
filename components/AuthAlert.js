import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthAlert = () => (
  <div
    className="alert alert-success alert-dismissible fade show text-dark"
    role="alert"
  >
    <NavLink exact to="/createaccount" title="Create an Account">
      Create an Account
    </NavLink>
    {' / '}
    <NavLink exact to="/signin" title="Sign In">
      Sign In
    </NavLink>{' '}
    to indicate if you are going to a Restaurant.
    <button
      type="button"
      className="close"
      data-dismiss="alert"
      aria-label="Close"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
);

export default AuthAlert;
