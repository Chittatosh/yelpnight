import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import PropTypes from 'prop-types';

const propTypes = {
  alias: PropTypes.string.isRequired,
};

const ReviewQuery = ({ alias }) => (
  <Query
    query={gql`
      {
        yelpReview(alias:"${alias}"){
          review
          reviewer
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>{`Fetching Review ${'.'.repeat(200)}`}</p>;
      if (error) return <p className="text-danger">{error.message}</p>;
      return (
        <p>
          <em>{`"${data.yelpReview.review}"`}</em> - {data.yelpReview.reviewer}
        </p>
      );
    }}
  </Query>
);

ReviewQuery.propTypes = propTypes;

export default ReviewQuery;
