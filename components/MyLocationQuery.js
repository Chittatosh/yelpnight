import React, { Fragment } from 'react';
import { Query } from 'react-apollo';

import MyLocationMut from './MyLocationMut';
import YelpSearchForm from './YelpSearchForm';
import { AuthAlert, LoadingAlert, ErrorAlert } from './BsAlerts';
import { AUTH_TOKEN, ME_QUERY } from '../client/constants';

const MyLocationQuery = () => {
  const authToken = localStorage.getItem(AUTH_TOKEN);
  return authToken ? (
    <Query query={ME_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <LoadingAlert text="Fetching Your Location..." />;
        if (error) return <ErrorAlert text={error.message} />;
        // Default location for authenticated users: 'SF'
        const prevLocation = data.me.location || 'SF';
        return <MyLocationMut {...{ prevLocation }} />;
      }}
    </Query>
  ) : (
    <Fragment>
      <AuthAlert />
      <YelpSearchForm />
    </Fragment>
  );
};

export default MyLocationQuery;
