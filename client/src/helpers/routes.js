import React, { useState, useEffect } from 'react';
import { Route, Redirect, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { authenticate } from '../features/user/userSlice';
import { user } from '../features/user/userSelectors';
import StateLoader from '../components/loaders/StateLoader';
import { viewVenues } from '../features/venues/venueSlice';
import { viewBookings } from '../features/booking/bookingSlice';
import { findMembers } from '../features/members/memberSlice';

export const ProtectedRoute = ({children}) => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const { path } = useRouteMatch();
  

  const userDetails = useSelector(user);

  useEffect(() => {
    if (userDetails != null) {
      setLoading(false);
    } else {
      dispatch(authenticate()).then((user) => {
        setLoading(false);
        dispatch(viewBookings());
        dispatch(findMembers({ userId: user.payload._id }));
      });
      dispatch(viewVenues());
    }
  }, [setLoading]);

  return (
    <Route
      render={() => {
        if (loading) {
          return <StateLoader/>;
        } if (userDetails) {
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
