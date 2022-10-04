import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { storage } from 'helpers/localStorage';
import { makeSignErrorMessage } from 'helpers/makeSignErrorMessage';
import toast from 'react-hot-toast';
import {
  currentUserRequest,
  loginRequest,
  refreshRequest,
  signupRequest,
} from 'services/auth-service';
import { ISignupCridentials, ILoginCridentials } from 'types/types';

export const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signup = createAsyncThunk(
  'auth/signup',
  async (credentials: ISignupCridentials) => {
    try {
      const user = await signupRequest(credentials);
      const { access, refresh } = user;
      token.set(access);
      storage.setTokens({ access, refresh });
      return user;
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(makeSignErrorMessage(error.response?.data), {
          duration: 10000,
        });
      }
      return Promise.reject(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: ILoginCridentials) => {
    try {
      const user = await loginRequest(credentials);
      const { access, refresh } = user;
      token.set(access);
      storage.setTokens({ access, refresh });
      return user;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
        toast.error(Object.values(error.response?.data).join(''));
      }
      return Promise.reject(error);
    }
  }
);

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (refreshToken: string) => {
    try {
      const access = await refreshRequest(refreshToken);
      token.set(access);
      storage.setLocalAccessToken(access);
      return access;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const getCurrentUser = createAsyncThunk('auth/getUser', async () => {
  try {
    const { username } = await currentUserRequest();
    return username;
  } catch (error) {
    return Promise.reject(error);
  }
});
