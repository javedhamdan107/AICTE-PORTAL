import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import userReducer from '../features/user/userSlice';
import memberReducer from '../features/members/memberSlice';
import venueReducer from '../features/venues/venueSlice';
import bookingReducer from '../features/booking/bookingSlice';
import appReducer from '../appSlice';

export const history = createBrowserHistory();

const reducer = {
  router: connectRouter(history),
  app: appReducer,
  users: userReducer,
  members: memberReducer,
  venues: venueReducer,
  bookings: bookingReducer,
};

const middleware = (getDefaultMiddleware) => getDefaultMiddleware()
  .concat(routerMiddleware(history));

export const store = configureStore({ reducer, middleware });
