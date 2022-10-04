import { RootState } from 'redux/store';

export const getUser = (store: RootState) => store.auth.user;

export const getRefreshToken = (store: RootState) => store.auth.user.refresh;

export const getAccessToken = (store: RootState) => store.auth.user.access;

export const getIsLoggedIn = (store: RootState) => store.auth.user.isLoggedIn;

export const getIsAuthLoading = (store: RootState) => store.auth.isLoading;
