import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import NavLinksAuth from './NavLinksAuth';
import { AUTH_TOKEN, ME_QUERY } from '../client/constants';

const propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

class MyNameQuery extends Component {
  constructor(props) {
    super(props);
    this.handleSignOut = () => {
      localStorage.removeItem(AUTH_TOKEN);
      this.props.history.push('/');
    };
  }
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    return authToken ? (
      <Query query={ME_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching...</div>;
          if (error) return <div>Error!</div>;
          return (
            <Fragment>
              <span className="navbar-text text-dark ml-3">
                Hello, {data.me.name}{' '}
                {data.me.location && `@${data.me.location}`}!
              </span>
              <button
                type="button"
                className="btn btn-info ml-3"
                onClick={this.handleSignOut}
              >
                Sign Out
              </button>
            </Fragment>
          );
        }}
      </Query>
    ) : (
      <NavLinksAuth />
    );
  }
}

MyNameQuery.propTypes = propTypes;

export default withRouter(MyNameQuery);
