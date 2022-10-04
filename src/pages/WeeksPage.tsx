import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { fetchWeeks } from 'services/api-service';
import { Button } from 'styles/Button.styled';
import {
  List,
  WeekItem,
  Heading,
} from '../components/Trainings/Trainings.styled';
import { FC } from 'react';
import { IWeek } from 'types/types';
import { Loader } from 'styles/Loader.styled';

const WeeksPage: FC = () => {
  const { data, isError, isLoading, isSuccess } = useQuery<IWeek[], Error>(
    'weeks',
    fetchWeeks
  );

  const navigate = useNavigate();
  return (
    <>
      {isError && <p>Something went wrong...</p>}

      {isLoading && <Loader absolute />}

      {isSuccess && data && (
        <List adaptive>
          {data.map(({ title, image, id }) => (
            <WeekItem key={id}>
              <Heading>{title}</Heading>
              <img src={image} alt="running person" />
              <Button onClick={() => navigate(`/trainings/${id}/`)}>
                <span>Start run</span>
              </Button>
            </WeekItem>
          ))}
        </List>
      )}
    </>
  );
};

export default WeeksPage;
