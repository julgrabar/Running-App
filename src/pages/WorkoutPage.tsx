import styled from 'styled-components';
import { useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Timer } from 'components/Timer/Timer';
import { Heading } from 'components/Trainings/Trainings.styled';
import { makeWorkout } from 'helpers/workoutMaker';
import { fetchWorkout, finishWorkoutRequest } from 'services/api-service';
import playImg from 'images/play.svg';
import finishedImg from 'images/finished.svg';
import { ITraining } from 'types/types';
import { useAppSelector } from 'redux/typedHooks';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { Loader } from 'styles/Loader.styled';
import { defWeeks } from 'program/program';
import { Button, GoToBtn } from 'components/Button/Button';

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
  const { data, isLoading } = useQuery<ITraining, Error>(
    ['workout', workoutId],
    () => fetchWorkout(workoutId)
  );

  let workout = useMemo(() => {
    let defProgram = defWeeks
      .reduce((acc: ITraining[], el) => [...acc, ...el.trainings], [])
      .find(el => el.id === Number(workoutId));

    return makeWorkout(data || defProgram);
  }, [workoutId, data]);

  const finishWorkout = () => {
    setStatus(Status.FINISHED);
    if (isLoggedIn && workoutId && !data?.is_passed) {
      finishWorkoutRequest(workoutId);
    }
  };

  const onTimerFinished = () => {
    if (workout && currentExersice === workout.workout.length - 1) {
      finishWorkout();
      return;
    }
    setCurrentExersice(prev => prev + 1);
  };

  return (
    <WorkoutWrapper>
      {isLoading && <Loader absolute />}

      {!isLoading && !workout && (
        <>
          <p>This workout doesn't exist...</p>
          <GoToBtn
            title="To program"
            primary
            path="/trainings"
            marginTop="20px"
          />
        </>
      )}

      {!isLoading && workout && (
        <>
          {status === Status.IDLE && (
            <>
              <Heading dark>{workout.title}</Heading>
              <Button
                title={<img src={playImg} alt="Play" />}
                onClick={() => setStatus(Status.INPROGRESS)}
                round={{ diameter: 160 }}
                primary
              />
            </>
          )}

          {status === Status.INPROGRESS && workout.workout.length > 0 && (
            <>
              <Heading dark>
                {workout.workout[currentExersice].exercise_type.title}
              </Heading>

              <img
                className="exercise-img"
                src={workout.workout[currentExersice].exercise_type.image}
                alt={workout.workout[currentExersice].exercise_type.title}
              />

              <Timer
                exersice={workout.workout[currentExersice]}
                onTimerFinished={onTimerFinished}
              />

              <Controls>
                {currentExersice === 0 ? (
                  <GoToBtn
                    primary
                    title="Go back"
                    path={`/trainings/${weekId}`}
                  />
                ) : (
                  <Button
                    primary
                    title="Previous"
                    onClick={() => setCurrentExersice(prev => prev - 1)}
                  />
                )}

                <Button
                  primary
                  onClick={
                    workout.workout.length === currentExersice + 1
                      ? finishWorkout
                      : () => setCurrentExersice(prev => prev + 1)
                  }
                  title={
                    workout.workout.length === currentExersice + 1
                      ? 'Finish workout'
                      : 'Next'
                  }
                />
              </Controls>
              <progress
                max={workout.workout.length}
                value={currentExersice + 1}
              ></progress>
            </>
          )}

          {status === Status.FINISHED && (
            <>
              <Heading dark>Well done! Workout is finished.</Heading>
              <img src={finishedImg} alt="Workout is finished" />
              <GoToBtn
                title="To program"
                primary
                path="/trainings"
                marginTop="20px"
              />
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

  progress {
    width: 100%;
  }
`;

const Controls = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;
