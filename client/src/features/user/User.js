import React from 'react';
import {
  Switch, Route, useRouteMatch, Redirect,
} from 'react-router-dom';
import Login from '../../components/Login/Login';

const User = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
        <Route exact path={`${path}/signin`} component={Login} />
        {/* <Route exact path={`${path}/signup`} component={SignupForm} /> */}
        <Redirect from="*" to="/error/not-found" />
    </Switch>
  );
};

export default User;