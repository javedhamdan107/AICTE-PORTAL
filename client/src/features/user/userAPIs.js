import { API } from '../../api/index';

export const signinAPI = (data) => API.post('/user/signin', data);
