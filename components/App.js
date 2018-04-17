import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_FEED = gql`
  query {
    feed {
      title
    }
  }
`;

const App = () => (
  <Query query={GET_FEED}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error :(</div>;

      return <div>{data.feed[1].title}</div>;
    }}
  </Query>
);

export default App;
