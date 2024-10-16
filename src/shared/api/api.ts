import axios from 'axios';
import { LOCAL_STORAGE_THEME_KEY } from '../const/localStorage';

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || '',
    },
});
