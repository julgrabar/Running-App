import styled from 'styled-components';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Heading } from 'components/Trainings/Trainings.styled';
import { TrainingsList } from 'components/Trainings/TrainingsList';
import { fetchTrainings } from 'services/api-service';
import { Loader } from 'styles/Loader.styled';
import { IWeek } from 'types/types';
import { useAppSelector } from 'redux/typedHooks';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { defWeeks } from 'program/program';
import { GoToBtn } from 'components/Button/Button';

export const WeekTrainingsPage = () => {
  const { weekId } = useParams();
  const isLoggedIn = useAppSelector(getIsLoggedIn);

  const { data, isLoading } = useQuery<IWeek, Error>(
    ['week', weekId, isLoggedIn],
    () => fetchTrainings(weekId)
  );
  let week = data || defWeeks.find(el => el.id === Number(weekId));

  return (
    <TrainingsPageWrapper>
      {isLoading && <Loader />}

      {!isLoading && week && (
        <>
          <Heading dark>{week.title}</Heading>
          <TrainingsList items={week.trainings} weekId={week.id} />
        </>
      )}
      {!isLoading && !week && <p>This week doesn't exist</p>}
      <GoToBtn title="Go back" primary path="/trainings" marginTop="30px" />
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
