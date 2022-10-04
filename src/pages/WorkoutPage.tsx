import styled from 'styled-components';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { Timer } from 'components/Timer/Timer';
import { Heading } from 'components/Trainings/Trainings.styled';
import { makeWorkout } from 'helpers/workoutMaker';
import { fetchWorkout, finishWorkoutRequest } from 'services/api-service';
import playImg from 'images/play.svg';
import finishedImg from 'images/finished.svg';
import { Button } from 'styles/Button.styled';
import { IExercise, ITraining, IWarming } from 'types/types';
import { useAppSelector } from 'redux/typedHooks';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { Loader } from 'styles/Loader.styled';

const Status = {
  IDLE: 'idle',
  INPROGRESS: 'inProgress',
  FINISHED: 'finished',
};

const WorkoutPage = () => {
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const [status, setStatus] = useState(Status.IDLE);
  const [currentExersice, setCurrentExersice] = useState(0);
  const { workoutId, weekId } = useParams();
  const navigate = useNavigate();
  let workout: (IWarming | IExercise)[] = [];
  const { data, isLoading, isSuccess, isError } = useQuery<ITraining, Error>(
    ['workout', workoutId],
    () => fetchWorkout(workoutId)
  );

  if (data && workout.length === 0) {
    workout = makeWorkout(data);
  }

  const finishWorkout = () => {
    setStatus(Status.FINISHED);
    if (isLoggedIn && workoutId && !data?.is_passed) {
      finishWorkoutRequest(workoutId);
    }
  };

  const onTimerFinished = () => {
    if (currentExersice === workout.length - 1) {
      finishWorkout();
      return;
    }
    setCurrentExersice(prev => prev + 1);
  };

  return (
    <WorkoutWrapper>
      {isLoading && <Loader absolute />}

      {isError && <p>Something went wrong...</p>}

      {isSuccess && data && (
        <>
          {status === Status.IDLE && (
            <>
              <Heading dark>{data.title}</Heading>
              <Button
                type="button"
                onClick={() => setStatus(Status.INPROGRESS)}
                round={{ diameter: 160 }}
                primary
              >
                <img src={playImg} alt="Play" />
              </Button>
            </>
          )}

          {status === Status.INPROGRESS && workout.length > 0 && (
            <>
              <Heading dark>
                {workout[currentExersice].exercise_type.title}
              </Heading>

              <img
                className="exercise-img"
                src={workout[currentExersice].exercise_type.image}
                alt={workout[currentExersice].exercise_type.title}
              />

              <Timer
                exersice={workout[currentExersice]}
                onTimerFinished={onTimerFinished}
              />

              <Controls>
                <Button
                  primary
                  onClick={
                    currentExersice === 0
                      ? () => navigate(`/trainings/${weekId}`)
                      : () => setCurrentExersice(prev => prev - 1)
                  }
                >
                  {currentExersice === 0 ? 'Go back' : 'Previous'}
                </Button>

                <Button
                  primary
                  onClick={
                    workout.length === currentExersice + 1
                      ? finishWorkout
                      : () => setCurrentExersice(prev => prev + 1)
                  }
                >
                  {workout.length === currentExersice + 1
                    ? 'Finish workout'
                    : 'Next'}
                </Button>
              </Controls>
            </>
          )}

          {status === Status.FINISHED && (
            <>
              <Heading dark>Well done! Workout is finished.</Heading>
              <img src={finishedImg} alt="Workout is finished" />
              <Button
                type="button"
                primary
                onClick={() => navigate('/trainings')}
                style={{ marginTop: '20px' }}
              >
                Go back
              </Button>
            </>
          )}
        </>
      )}
    </WorkoutWrapper>
  );
};

export default WorkoutPage;

const WorkoutWrapper = styled.div`
  text-align: center;
  width: 100%;
  max-width: 360px;
  margin: auto;
  span {
    display: block;
  }

  img.exercise-img {
    max-height: 225px;
  }
`;

const Controls = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;
