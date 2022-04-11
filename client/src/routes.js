import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import User from './features/user/User.js';
import Header from './components/Header/Header.js';

const Routes = () => (
    <Switch>
      <Redirect exact from="/" to="/user/signin" />
      <Route path="/user" component={User} />
    </Switch>
  );
  
export default Routes;