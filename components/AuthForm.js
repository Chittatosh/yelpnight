import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import { AUTH_TOKEN } from '../client/constants';

const propTypes = {
  signupBool: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  mutateFunc: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      password2Blur: false,
    };
    this.setPassBlur = () =>
      this.setState(({ password2 }) => ({ password2Blur: password2 }));
    this.handleChange = ({ target }) =>
      this.setState({ [target.name]: target.value });
    this.handleSubmit = event => {
      event.preventDefault();
      const { name, email, password } = this.state;
      const variables = this.props.signupBool
        ? { name, email, password }
        : { email, password };
      this.props.mutateFunc({ variables });
    };
  }
  componentDidUpdate() {
    const { token, history } = this.props;
    if (token) {
      localStorage.setItem(AUTH_TOKEN, token);
      history.push('/');
    }
  }
  render() {
    const { signupBool, loading, errorMessage, token } = this.props;
    const { name, email, password, password2, password2Blur } = this.state;
    const passwordsMatch = password === password2;
    const disableSubmit = signupBool
      ? !name || !email || !password || !password2 || !passwordsMatch
      : !email || !password;
    return (
      <div className="card">
        <div className="card-body">
          {loading && (
            <p className="text-light bg-dark text-center mt-3">Fetching...</p>
          )}
          {errorMessage && (
            <p className="text-light bg-danger text-center mt-3">
              {errorMessage}
            </p>
          )}
          {token && (
            <p className="text-light bg-success text-center mt-3">
              Login Successful!
            </p>
          )}
          <form onSubmit={this.handleSubmit}>
            <h2 className="mb-3">
              {signupBool ? 'Create an Account' : 'Sign In'}
            </h2>
            {signupBool && (
              <div className="form-group">
                <label htmlFor="loginName">
                  Username
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="loginName"
                    aria-describedby="emailHelp"
                    placeholder="Enter Username"
                    value={name}
                    onChange={this.handleChange}
                    size="200"
                    required
                  />
                </label>
              </div>
            )}
            <div className="form-group">
              <label htmlFor="loginEmail">
                Email address
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="loginEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={email}
                  onChange={this.handleChange}
                  size="200"
                  required
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="loginPassword">
                Password
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="loginPassword"
                  placeholder="Password"
                  value={password}
                  onChange={this.handleChange}
                  size="200"
                  required
                />
              </label>
            </div>
            {signupBool && (
              <div className="form-group">
                <label htmlFor="loginPassword2">
                  Confirm Password
                  <input
                    name="password2"
                    type="password"
                    className={`form-control ${password2Blur &&
                      (passwordsMatch ? 'is-valid' : 'is-invalid')}`}
                    id="loginPassword2"
                    placeholder="Confirm Password"
                    value={password2}
                    onChange={this.handleChange}
                    onBlur={this.setPassBlur}
                    size="200"
                    required
                  />
                  {password2Blur &&
                    (passwordsMatch ? (
                      <p className="text-success">Passwords match!</p>
                    ) : (
                      <p className="text-danger">Passwords must match!</p>
                    ))}
                </label>
              </div>
            )}
            <button
              type="submit"
              className="btn btn-primary"
              disabled={disableSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

AuthForm.propTypes = propTypes;

export default withRouter(AuthForm);
