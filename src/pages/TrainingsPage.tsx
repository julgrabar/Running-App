import styled from 'styled-components';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { Heading } from 'components/Trainings/Trainings.styled';
import { TrainingsList } from 'components/Trainings/TrainingsList';
import { fetchTrainings } from 'services/api-service';
import { Button } from 'styles/Button.styled';
import { Loader } from 'styles/Loader.styled';
import { IWeek } from 'types/types';
import { useAppSelector } from 'redux/typedHooks';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

export const WeekTrainingsPage = () => {
  const { weekId } = useParams();
  const isLoggedIn = useAppSelector(getIsLoggedIn);

  const {
    data: week,
    isLoading,
    isSuccess,
    isError,
  } = useQuery<IWeek, Error>(['week', weekId, isLoggedIn], () =>
    fetchTrainings(weekId)
  );

  const navigate = useNavigate();

  return (
    <TrainingsPageWrapper>
      {isLoading && <Loader />}

      {isError && <p>Something went wrong...</p>}

      {isSuccess && week && (
        <>
          <Heading dark>{week.title}</Heading>
          <TrainingsList items={week.trainings} weekId={week.id} />
        </>
      )}
      <Button
        primary
        type="button"
        onClick={() => navigate('/trainings')}
        style={{ marginTop: '30px' }}
      >
        <span>Go back</span>
      </Button>
    </TrainingsPageWrapper>
  );
};

export default WeekTrainingsPage;

const TrainingsPageWrapper = styled.div`
  text-align: center;
  width: 100%;
  max-width: 480px;
  margin: auto;
`;
