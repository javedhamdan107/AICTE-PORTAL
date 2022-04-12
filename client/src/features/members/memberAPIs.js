import { API } from '../../api/index';

export const findMembersAPI = (data) => API.post('auth/user/findMembers', data);