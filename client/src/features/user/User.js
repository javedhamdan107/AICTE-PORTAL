import React from 'react';
import {
  Switch, Route, useRouteMatch, Redirect,
} from 'react-router-dom';
import Booking from '../../components/Booking/Booking';
import Dashboard from '../../components/Dashboard/Dashboard';
import Login from '../../components/Login/Login';
import { ProtectedRoute } from '../../helpers/routes';

const User = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
        <Route exact path={`${path}/signin`} component={Login} />
        <ProtectedRoute exact path={`${path}/dashboard`}>
            <Dashboard />
        </ProtectedRoute>
        <ProtectedRoute exact path={`${path}/booking`}>
            <Booking />
        </ProtectedRoute>
        <Redirect from="*" to="/error/not-found" />
    </Switch>
  );
};

export default User;