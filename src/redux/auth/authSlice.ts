import { createSlice } from '@reduxjs/toolkit';
import { storage } from 'helpers/localStorage';
import { getCurrentUser, login, refresh, signup } from './authOperations';

interface IAuthInitState {
  user: {
    username: null | string;
    isLoggedIn: boolean;
    access: null | string;
    refresh: null | string;
  };
  isLoading: boolean;
}

const initialState: IAuthInitState = {
  user: {
    username: null,
    isLoggedIn: false,
    access: storage.getLocalAccessToken() || null,
    refresh: storage.getLocalRefreshToken() || null,
  },
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => ({
      user: {
        username: null,
        isLoggedIn: false,
        access: null,
        refresh: null,
      },
      isLoading: false,
    }),
  },
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, { payload }) => ({
        user: { ...payload, isLoggedIn: true },
        isLoading: false,
      }))
      .addCase(login.pending, state => ({
        ...state,
        isLoading: true,
      }))
      .addCase(login.rejected, state => ({
        ...state,
        isLoading: false,
      }))
      .addCase(signup.fulfilled, (state, { payload }) => ({
        user: { ...payload, isLoggedIn: true },
        isLoading: false,
      }))
      .addCase(signup.pending, state => ({
        ...state,
        isLoading: true,
      }))
      .addCase(signup.rejected, state => ({
        ...state,
        isLoading: false,
      }))
      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.user.access = payload;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, username: payload, isLoggedIn: true };
      });
  },
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
