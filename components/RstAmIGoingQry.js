import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import PropTypes from 'prop-types';

import RstGoingMut from './RstGoingMut';
import { USER_FIELDS, RESTAURANT_FIELDS } from '../client/constants';

const propTypes = {
  alias: PropTypes.string.isRequired,
};

const RstAmIGoingQry = ({ alias }) => (
  <Query
    query={gql`
      {
        me ${USER_FIELDS}
        restaurant(alias:"${alias}") ${RESTAURANT_FIELDS}
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Fetching Your Status...</p>;
      if (error) return <p className="text-danger">{error.message}</p>;
      const { me, restaurant } = data;
      const isRestInDb = Boolean(restaurant);
      const guestList = restaurant && restaurant.guestList;
      const nameList =
        guestList && guestList.length && guestList.map(guest => guest.name);
      const amIGoingHere = Boolean(nameList && nameList.indexOf(me.name) + 1);
      return <RstGoingMut {...{ alias, isRestInDb, amIGoingHere }} />;
    }}
  </Query>
);

RstAmIGoingQry.propTypes = propTypes;

export default RstAmIGoingQry;
