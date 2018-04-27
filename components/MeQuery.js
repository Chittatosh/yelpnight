import React, { Component, Fragment } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import { AUTH_TOKEN } from '../client/constants';
import NavLinksAuth from './NavLinksAuth';

const propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const ME_QUERY = gql`
  query {
    me {
      name
      restaurantList {
        alias
      }
    }
  }
`;

class MeQuery extends Component {
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
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error!</div>;
          return (
            <Fragment>
              <span className="navbar-text text-dark ml-3">
                Hello, {data.me.name}!
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

MeQuery.propTypes = propTypes;

export { ME_QUERY };
export default withRouter(MeQuery);
