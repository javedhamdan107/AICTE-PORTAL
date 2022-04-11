import axios from 'axios';
import config from '../config';

const URL = config.API_BASE_URL;
export const API = axios.create({ withCredentials: true, baseURL: URL });
