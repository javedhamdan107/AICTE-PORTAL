import { API } from '../../api/index';

export const viewBookingsAPI = () => API.get('auth/user/viewBooking');

export const createBookingsAPI = (data) => API.post('auth/user/book', data);