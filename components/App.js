import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import YelpSearchQuery from './YelpSearchQuery';
import Navbar from './Navbar';
import AuthMutation from './AuthMutation';

const App = () => (
  <Fragment>
    <Navbar />
    <Switch>
      <Route exact path="/" component={YelpSearchQuery} />
      <Route exact path="/signin" component={AuthMutation} />
      <Route exact path="/createaccount" component={AuthMutation} />
    </Switch>
  </Fragment>
);

export default App;
