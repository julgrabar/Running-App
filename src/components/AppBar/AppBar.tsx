import { storage } from 'helpers/localStorage';
import { token } from 'redux/auth/authOperations';
import { getUser } from 'redux/auth/authSelectors';
import { logout } from 'redux/auth/authSlice';
import logoutImg from 'images/logout.svg';
import { useAppDispatch, useAppSelector } from 'redux/typedHooks';
import {
  Header,
  HeaderContainer,
  HeaderLink,
  UserBlock,
} from './AppBar.styled';

export const AppBar = () => {
  const { username, isLoggedIn } = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  const onLogOutClick = () => {
    dispatch(logout());
    token.unset();
    storage.clearTokens();
  };

  return (
    <Header>
      <HeaderContainer>
        <nav>
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/trainings">Trainings</HeaderLink>
        </nav>
        <UserBlock>
          {isLoggedIn ? (
            <>
              <p>{username}</p>
              <button
                className="logout-btn"
                type="button"
                onClick={onLogOutClick}
              >
                <img src={logoutImg} alt="logout" />
              </button>
            </>
          ) : (
            <>
              <HeaderLink to="/login">Log in</HeaderLink>
              <HeaderLink to="/signup">Sign up</HeaderLink>
            </>
          )}
        </UserBlock>
      </HeaderContainer>
    </Header>
  );
};
