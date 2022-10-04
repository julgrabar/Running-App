import { Heading } from 'components/Trainings/Trainings.styled';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'styles/Button.styled';
import { CenteredWrapper, CenteringWrapper } from 'styles/CenteredWrapper';
import img404 from 'images/404.svg';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <CenteringWrapper>
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
    </CenteringWrapper>
  );
};

const NotFoundPageWrapper = styled(CenteredWrapper)`
  text-align: center;
  width: 100%;
  max-width: 420px;
`;

export default NotFoundPage;
