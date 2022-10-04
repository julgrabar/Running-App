import { SignupForm } from 'components/Forms/SignupForm';
import { Heading } from 'components/Trainings/Trainings.styled';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import authImg from 'images/auth.svg';
import { LoginForm } from 'components/Forms/LoginForm';

interface IProps {
  signup?: boolean;
  login?: boolean;
}

const AuthPage = ({ signup, login }: IProps) => {
  return (
    <AuthPageWrapper>
      <img src={authImg} alt="Hello, user!" />

      <ContentWrapper>
        {signup && (
          <>
            <Heading dark>Create an Account</Heading>
            <SignupForm />
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </>
        )}
        {login && (
          <>
            <Heading dark>Welcome Back</Heading>
            <LoginForm />
            <p>
              Don’t have an account yet? <Link to="/signup">Sign up</Link>
            </p>
          </>
        )}
      </ContentWrapper>
    </AuthPageWrapper>
  );
};

export default AuthPage;

const AuthPageWrapper = styled.div`
  height: 1px;
  min-height: 100%;
  margin: 0 auto;
  padding-bottom: 30px;

  img {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: auto;

    img {
      display: inline-block;
      width: 50%;
      margin: auto;
      max-width: 450px;
    }
  }
`;

const ContentWrapper = styled.div`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  text-align: center;
  margin: 0 auto;

  form {
    margin-bottom: auto;
  }

  @media screen and (min-width: 768px) {
    margin-left: 30px;
    min-height: auto;
    width: 350px;

    form {
      margin-bottom: 15px;
    }
  }

  @media screen and (min-width: 1200px) {
    width: 400px;
    margin: auto;
  }
`;
