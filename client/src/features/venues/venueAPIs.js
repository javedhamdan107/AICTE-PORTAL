import { API } from '../../api/index';

export const viewVenuesAPI = () => API.get('auth/user/viewVenues');