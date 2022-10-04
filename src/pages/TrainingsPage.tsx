import { Heading } from 'components/Trainings/Trainings.styled';
import { TrainingsList } from 'components/Trainings/TrainingsList';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchTrainings } from 'services/api-service';
import styled from 'styled-components';
import { Button } from 'styles/Button.styled';
import { CenteredWrapper, CenteringWrapper } from 'styles/CenteredWrapper';
import { Loader } from 'styles/Loader.styled';
import { IWeek } from 'types/types';

export const WeekTrainingsPage = () => {
  const { weekId } = useParams();

  const {
    data: week,
    isLoading,
    isSuccess,
    isError,
  } = useQuery<IWeek, Error>(['week', weekId], () => fetchTrainings(weekId));

  const navigate = useNavigate();

  return (
    <CenteringWrapper>
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
    </CenteringWrapper>
  );
};

export default WeekTrainingsPage;

const TrainingsPageWrapper = styled(CenteredWrapper)`
  width: 100%;
  max-width: 480px;
`;
