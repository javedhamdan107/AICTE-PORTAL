import { push } from 'connected-react-router';
import { showAppToast } from '../appSlice';
import { logout } from '../features/user/userSlice';
import { deleteAllCookies } from './utils';

export const setupAxiosInterceptors = (API, store) => {
  // Add a response interceptor
  API.interceptors.response.use((response) =>
  // Any status code that lie within the range of 2xx cause this function to trigger
    response, // eslint-disable-line implicit-arrow-linebreak
  (error) => {
    if (!error.response) {
      store.dispatch(showAppToast('Network Error. Please make sure you are connected to the network'));
    }

    // Any status codes that falls outside the range of 2xx cause this function to t
    const { status } = error.response;

    if (status === 401) {
      deleteAllCookies();

      store.dispatch(logout());
      store.dispatch(push('/user/signin'));
    }

    return Promise.reject(error);
  });
};
