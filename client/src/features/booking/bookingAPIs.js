import { API } from '../../api/index';

export const viewBookingsAPI = () => API.get('auth/user/viewBooking');