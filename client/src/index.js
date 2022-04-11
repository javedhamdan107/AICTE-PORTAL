import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import { store, history } from './app/store';
import { API } from './api';
import { setupAxiosInterceptors } from './helpers/axiosInterceptors';
import App from './App';

setupAxiosInterceptors(API, store);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);

