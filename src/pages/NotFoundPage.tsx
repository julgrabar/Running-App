import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Heading } from 'components/Trainings/Trainings.styled';
import { Button } from 'styles/Button.styled';
import img404 from 'images/404.svg';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <NotFoundPageWrapper>
      <img src={img404} alt="This page doesn't exist" />
      <Heading dark>Lost your way?</Heading>
      <p>
        Oops! This is awkward. You are looking for something that doesn't
        actually exist.
      </p>
      <Button
        type="button"
        primary
        onClick={() => navigate('/')}
        style={{ marginTop: '20px' }}
      >
        Go home
      </Button>
    </NotFoundPageWrapper>
  );
};

const NotFoundPageWrapper = styled.div`
  text-align: center;
  width: 100%;
  max-width: 420px;
  margin: auto;
`;

export default NotFoundPage;
