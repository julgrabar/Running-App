import styled from 'styled-components';
import { Heading } from 'components/Trainings/Trainings.styled';
import img404 from 'images/404.svg';
import { GoToBtn } from 'components/Button/Button';

const NotFoundPage = () => {
  return (
    <NotFoundPageWrapper>
      <img src={img404} alt="This page doesn't exist" />
      <Heading dark>Lost your way?</Heading>
      <p>
        Oops! This is awkward. You are looking for something that doesn't
        actually exist.
      </p>
      <GoToBtn title="Go home" primary path="/" marginTop="20px" />
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
