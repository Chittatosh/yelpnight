import React from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';

import RstGoingForm from './RstGoingForm';
import { RESTAURANT_FIELDS } from '../client/constants';

const propTypes = {
  alias: PropTypes.string.isRequired,
  isRestInDb: PropTypes.bool.isRequired,
  amIGoingHere: PropTypes.bool.isRequired,
};

const RstGoingMut = ({ alias, isRestInDb, amIGoingHere }) => {
  let mutField = 'addRestaurant';
  if (isRestInDb) {
    mutField = amIGoingHere ? 'removeMeFromRestaurant' : 'addMeToRestaurant';
  }
  return (
    <Mutation
      mutation={gql`
        mutation {
          ${mutField}(alias: "${alias}") ${RESTAURANT_FIELDS}
        }
      `}
      update={
        isRestInDb
          ? null
          : (cache, { data: { addRestaurant } }) =>
              cache.writeQuery({
                query: gql`{ restaurant(alias:"${alias}") ${RESTAURANT_FIELDS} }`,
                data: { restaurant: addRestaurant },
              })
      }
    >
      {(mutateFunc, { loading, error }) => {
        if (loading) return <p>Saving...</p>;
        if (error) return <p className="text-danger">{error.message}</p>;
        return <RstGoingForm {...{ amIGoingHere, mutateFunc, alias }} />;
      }}
    </Mutation>
  );
};

RstGoingMut.propTypes = propTypes;

export default RstGoingMut;
