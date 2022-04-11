import React, { useState, useEffect } from 'react';
import { Route, Redirect, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { authenticate } from '../features/user/userSlice';
import { user } from '../features/user/userSelectors';
import StateLoader from '../components/loaders/StateLoader';

export const ProtectedRoute = ({ children, type }) => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const { path } = useRouteMatch();

  const userDetails = useSelector(user);

  useEffect(() => {
    if (userDetails != null) {
      setLoading(false);
    } else {
      dispatch(authenticate()).then(() => setLoading(false));
    }
  }, [setLoading]);

  return (
    <Route
      render={() => {
        if (loading) {
          return <StateLoader/>;
        } if (userDetails && (!type || userDetails.userType === type)) {
          return children;
        }

        return <Redirect exact from={path} to="/error/unauthorized" />;
      }}
    />
  );
};

ProtectedRoute.propTypes = {
  children: PropTypes.object,
  type: PropTypes.string,
};
