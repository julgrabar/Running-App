import styled from 'styled-components';
import homePageImg from 'images/homepage.svg';
import { Link } from 'react-router-dom';
import { Heading } from 'components/Trainings/Trainings.styled';
import { useAppSelector } from 'redux/typedHooks';
import { getUser } from 'redux/auth/authSelectors';

const HomePage = () => {
  const user = useAppSelector(getUser);
  const { username, isLoggedIn } = user;

  return (
    <HomePageWrapper>
      <img src={homePageImg} alt="Register, log in or do a workout" />
      <UserNav>
        <Heading dark>{`Welcome${isLoggedIn ? ', ' + username : ''}!`}</Heading>
        {!isLoggedIn && (
          <>
            <Link to="/login">Log in</Link>
            <Link to="/signup">Sign up</Link>
          </>
        )}
        <Link to="/trainings">
          {isLoggedIn ? 'Do a workout' : 'Do a workout as a guest'}
        </Link>
      </UserNav>
    </HomePageWrapper>
  );
};

export default HomePage;

const HomePageWrapper = styled.div`
  min-height: 100%;
  max-width: 300px;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;

  img {
    display: block;
    margin: 0 0 24px 0;
  }

  @media screen and (min-width: 768px) {
    max-width: none;
    flex-direction: row;
    align-items: center;
    img {
      width: 50%;
      margin: 0 24px 0 0;
      max-width: 450px;
    }
  }
`;

const UserNav = styled.div`
  margin-top: auto;
  text-align: center;
  overflow: hidden;
  word-wrap: break-word;

  span {
    max-width: 80%;
  }

  a {
    display: block;
    background: ${({ theme }) => theme.colors.gradient};
    padding: 8px;
    border-radius: 24px;
    color: #fff;

    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }

  @media screen and (min-width: 768px) {
    flex-grow: 1;
    margin: auto;
    max-width: 400px;
  }
`;
