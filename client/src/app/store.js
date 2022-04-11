import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import userReducer from '../features/user/userSlice';
import appReducer from '../appSlice';

export const history = createBrowserHistory();

const reducer = {
  router: connectRouter(history),
  app: appReducer,
  users: userReducer,
};

const middleware = (getDefaultMiddleware) => getDefaultMiddleware()
  .concat(routerMiddleware(history));

export const store = configureStore({ reducer, middleware });
