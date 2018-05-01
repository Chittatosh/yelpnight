import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import YelpSearchQuery from './YelpSearchQuery';

const propTypes = {
  location: PropTypes.string,
  authBool: PropTypes.bool,
  mutateFunc: PropTypes.func,
  loading: PropTypes.bool,
  errorMessage: PropTypes.string,
};

const defaultProps = {
  location: 'San Francisco', // For unauthenticated users
  authBool: false,
  mutateFunc: () => {},
  loading: false,
  errorMessage: '',
};

class YelpSearchForm extends Component {
  constructor(props) {
    super(props);
    const { location, authBool } = this.props;
    this.state = { inputTerm: location, searchTerm: location };
    this.handleChange = ({ target }) =>
      this.setState({ inputTerm: target.value });
    this.handleSubmit = event => {
      event.preventDefault();
      this.setState(({ inputTerm }) => ({ searchTerm: inputTerm }));
      const { inputTerm } = this.state;
      if (authBool) {
        this.props.mutateFunc({ variables: { location: inputTerm } });
      }
    };
  }
  render() {
    const { loading, errorMessage } = this.props;
    const { inputTerm, searchTerm } = this.state;
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          {loading && (
            <p className="text-light bg-dark text-center">
              Saving your location...
            </p>
          )}
          {errorMessage && (
            <p className="text-light bg-danger text-center">{errorMessage}</p>
          )}
          <div className="form-group row d-flex align-items-center">
            {/* eslint-disable-next-line jsx-a11y/label-has-for */}
            <label htmlFor="yelpSearch" className="col-sm-2 col-form-label">
              My Location:
            </label>
            <div className="col-sm-10 input-group">
              <span className="input-group-prepend">
                <button
                  type="submit"
                  className="btn btn-secondary"
                  disabled={!inputTerm}
                >
                  <i className="fas fa-search" />
                </button>
              </span>
              <input
                type="text"
                className="form-control"
                id="yelpSearch"
                placeholder="My Location"
                aria-label="Search for..."
                value={inputTerm}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </form>
        <YelpSearchQuery {...{ searchTerm }} />
      </Fragment>
    );
  }
}

YelpSearchForm.propTypes = propTypes;
YelpSearchForm.defaultProps = defaultProps;

export default YelpSearchForm;
