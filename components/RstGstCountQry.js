import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import PropTypes from 'prop-types';

import { RESTAURANT_FIELDS } from '../client/constants';

const propTypes = {
  alias: PropTypes.string.isRequired,
};

const RstGstCountQry = ({ alias }) => (
  <Query
    query={gql`
      {
        restaurant(alias:"${alias}") ${RESTAURANT_FIELDS}
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Fetching Guest Count...</p>;
      if (error) return <p className="text-danger">{error.message}</p>;
      const guestCount = data.restaurant && data.restaurant.guestList.length;
      return (
        Boolean(guestCount) && (
          <h4>
            <span className="badge badge-primary badge-pill">{guestCount}</span>
            <span className="h5">
              {guestCount === 1 ? ' Guest' : ' Guests'}
            </span>
          </h4>
        )
      );
    }}
  </Query>
);

RstGstCountQry.propTypes = propTypes;

export default RstGstCountQry;
