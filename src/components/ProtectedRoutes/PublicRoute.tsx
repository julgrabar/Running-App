import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { useAppSelector } from 'redux/typedHooks';

interface IProps {
  children: ReactElement;
  restricted?: boolean;
}

export const PublicRoute = ({ children, restricted }: IProps) => {
  const isLogged = useAppSelector(getIsLoggedIn);
  return isLogged && restricted ? <Navigate to="/" replace={true} /> : children;
};
