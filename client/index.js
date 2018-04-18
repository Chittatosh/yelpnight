/* eslint-env browser */
import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import App from '../components/App';

// Default endpoint { uri: '/graphql' }
const client = new ApolloClient();

const hotRender = () =>
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById('root'),
  );

hotRender();

if (module.hot) {
  module.hot.accept('../components/App', hotRender);
}
