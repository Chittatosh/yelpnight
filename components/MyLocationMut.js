import React from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';

import YelpSearchForm from './YelpSearchForm';
import { USER_FIELDS } from '../client/constants';

const propTypes = {
  prevLocation: PropTypes.string.isRequired,
};

const MY_LOCATION_MUTATION = gql`
  mutation updateMyLocation($location: String!) {
    updateMyLocation(location: $location) ${USER_FIELDS}
  }
`;

const MyLocationMut = ({ prevLocation }) => (
  <Mutation mutation={MY_LOCATION_MUTATION}>
    {(mutateFunc, { loading, error, data }) => {
      const { location } = (data && data.updateMyLocation) || {
        location: prevLocation,
      };
      const authBool = true;
      const errorMessage = (error && error.message) || '';
      return (
        <YelpSearchForm
          {...{ location, authBool, mutateFunc, loading, errorMessage }}
        />
      );
    }}
  </Mutation>
);

MyLocationMut.propTypes = propTypes;

export default MyLocationMut;
