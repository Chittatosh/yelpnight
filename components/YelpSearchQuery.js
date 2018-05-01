import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import PropTypes from 'prop-types';

import Restaurant from './Restaurant';

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
    {({ loading, error, data }) => {
      if (loading) {
        return (
          <p className="text-light bg-dark text-center">Searching Yelp...</p>
        );
      }
      if (error) {
        return (
          <p className="text-light bg-danger text-center">{error.message}</p>
        );
      }
      return (
        <ul className="list-group">
          {data.yelpSearch.map(restaurant => (
            <Restaurant {...restaurant} key={restaurant.alias} />
          ))}
        </ul>
      );
    }}
  </Query>
);

YelpSearchQuery.propTypes = propTypes;

export default YelpSearchQuery;
