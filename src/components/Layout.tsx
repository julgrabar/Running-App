import { Suspense, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { getCurrentUser } from 'redux/auth/authOperations';
import { getRefreshToken } from 'redux/auth/authSelectors';
import { useAppDispatch, useAppSelector } from 'redux/typedHooks';
import { Container } from 'styles/Container';
import { Global } from 'styles/globalStyles';
import { Loader } from 'styles/Loader.styled';
import { AppBar } from './AppBar/AppBar';

export const Layout = () => {
  const token = useAppSelector(getRefreshToken);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getCurrentUser());
    }
  }, [token, dispatch]);
  return (
    <>
      <Global />
      <AppBar />
      <Container>
        <Suspense fallback={<Loader absolute />}>
          <Outlet />
        </Suspense>
      </Container>
      <Toaster />
    </>
  );
};
