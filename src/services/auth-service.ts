import axios from 'axios';
import { refresh, token } from 'redux/auth/authOperations';
import { ISignupCridentials, ILoginCridentials } from 'types/types';
import { store } from 'redux/store';
import { logout } from 'redux/auth/authSlice';
import { storage } from 'helpers/localStorage';

axios.defaults.baseURL = 'https://running-app-api.herokuapp.com/api';

export const signupRequest = async (credentials: ISignupCridentials) => {
  const { data } = await axios.post('/users/signup/', credentials);
  return data;
};

export const loginRequest = async (credentials: ILoginCridentials) => {
  const { data } = await axios.post('/users/token/', credentials);
  return { ...data, username: credentials.username };
};

export const refreshRequest = async (refresh: string) => {
  const { data } = await axios.post('/users/token/refresh/', { refresh });
  return data.access;
};

export const currentUserRequest = async () => {
  const { data } = await axios.get('/users/me/');
  return data;
};

axios.interceptors.request.use(
  config => {
    const token = store.getState().auth.user.access;
    if (token) {
      config.headers = { Authorization: 'Bearer ' + token };
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  res => {
    return res;
  },
  async err => {
    const originalConfig = err.config;
    const { dispatch } = store;

    if (
      err.response?.status === 401 &&
      originalConfig.url === '/users/token/refresh/'
    ) {
      dispatch(logout());
      token.unset();
      storage.clearTokens();
      return Promise.reject(err);
    }

    if (
      err.response?.status === 401 &&
      err.config &&
      !err.config._isRetry &&
      originalConfig.url !== '/users/token/'
    ) {
      try {
        const refreshToken = store.getState().auth.user.refresh;
        originalConfig._isRetry = true;
        if (refreshToken !== null) {
          await dispatch(refresh(refreshToken));
        }
        return axios.request(originalConfig);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(err);
  }
);
