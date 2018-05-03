import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string.isRequired,
};

export const LoadingAlert = ({ text }) => (
  <div className="alert alert-primary text-dark text-center" role="alert">
    {text}
  </div>
);

export const ErrorAlert = ({ text }) => (
  <div className="alert alert-danger text-dark text-center" role="alert">
    {text}
  </div>
);

export const AuthAlert = () => (
  <div
    className="alert alert-success alert-dismissible fade show text-dark"
    role="alert"
  >
    <NavLink exact to="/createaccount" title="Create an Account">
      <span className="alert-link">
        <u>Create an Account</u>
      </span>
    </NavLink>
    {' / '}
    <NavLink exact to="/signin" title="Sign In">
      <span className="alert-link">
        <u>Sign In</u>
      </span>
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

LoadingAlert.propTypes = propTypes;
ErrorAlert.propTypes = propTypes;
