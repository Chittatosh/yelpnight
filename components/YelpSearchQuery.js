import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import PropTypes from 'prop-types';

import Restaurant from './Restaurant';
import { LoadingAlert, ErrorAlert } from './BsAlerts';

const propTypes = {
  searchTerm: PropTypes.string.isRequired,
};

const YelpSearchQuery = ({ searchTerm }) => (
  <Query
    query={gql`
      {
        yelpSearch(location:"${searchTerm}"){
          alias
          name
          imageUrl
          url
          address
        }
      }
    `}
  >
    {({ loading, error, data }) => (
      <Fragment>
        {loading && <LoadingAlert text="Searching Yelp..." />}
        {error && <ErrorAlert text={error.message} />}
        {data &&
          data.yelpSearch && (
            <ul className="list-group">
              {data.yelpSearch.map(restaurant => (
                <Restaurant {...restaurant} key={restaurant.alias} />
              ))}
            </ul>
          )}
      </Fragment>
    )}
  </Query>
);

YelpSearchQuery.propTypes = propTypes;

export default YelpSearchQuery;
