import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import MyLocationQuery from './MyLocationQuery';
import Navbar from './Navbar';
import AuthMutation from './AuthMutation';

const App = () => (
  <Fragment>
    <Navbar />
    <Switch>
      <Route exact path="/" component={MyLocationQuery} />
      <Route exact path="/signin" component={AuthMutation} />
      <Route exact path="/createaccount" component={AuthMutation} />
    </Switch>
  </Fragment>
);

export default App;
