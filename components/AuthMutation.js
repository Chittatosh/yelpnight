import React from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';

import { ME_QUERY } from './MeQuery';
import AuthForm from './AuthForm';

const propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

const AuthMutation = ({ location: { pathname } }) => {
  const signupBool = pathname === '/createaccount';
  const field = signupBool ? 'signup' : 'login';
  const nameVar = signupBool ? '$name: String!,' : '';
  const nameArg = signupBool ? 'name: $name,' : '';
  return (
    <Mutation
      mutation={gql`
        mutation ${field}(${nameVar} $email: String!, $password: String!) {
          ${field}(${nameArg} email: $email, password: $password) {
            token
            user {
              name
              restaurantList {
                alias
              }
            }
          }
        }
      `}
      update={(
        cache,
        {
          data: {
            [field]: { user },
          },
        },
      ) =>
        cache.writeQuery({
          query: ME_QUERY,
          data: { me: user },
        })
      }
    >
      {(mutateFunc, { loading, error, data }) => {
        const { token } = (data && data[field]) || { token: '' };
        const errorMessage = (error && error.message) || '';
        return (
          <AuthForm
            {...{ signupBool, mutateFunc, loading, errorMessage, token }}
          />
        );
      }}
    </Mutation>
  );
};

AuthMutation.propTypes = propTypes;

export default AuthMutation;
