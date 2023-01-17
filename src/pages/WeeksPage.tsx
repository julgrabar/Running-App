import { useQuery } from 'react-query';
import { fetchWeeks } from 'services/api-service';
import {
  List,
  WeekItem,
  Heading,
} from '../components/Trainings/Trainings.styled';
import { FC } from 'react';
import { IWeek } from 'types/types';
import { Loader } from 'styles/Loader.styled';
import { defWeeks } from 'program/program';
import { GoToBtn } from 'components/Button/Button';

const WeeksPage: FC = () => {
  const { data, isLoading } = useQuery<IWeek[], Error>('weeks', fetchWeeks);
  let weeksList = data || defWeeks;

  return (
    <>
      {isLoading && <Loader absolute />}

      {!isLoading && weeksList && (
        <List adaptive>
          {weeksList.map(({ title, image, id }) => (
            <WeekItem key={id}>
              <Heading>{title}</Heading>
              <img src={image} alt="running person" />
              <GoToBtn
                title={<span>Start run</span>}
                path={`/trainings/${id}/`}
              />
            </WeekItem>
          ))}
        </List>
      )}
    </>
  );
};

export default WeeksPage;
