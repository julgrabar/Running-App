import { useEffect, useRef, useState } from 'react';
import { IExercise, IWarming } from 'types/types';
import useSound from 'use-sound';
import stopImg from 'images/pause.svg';
import startImg from 'images/play.svg';
import { TimerWrapper } from './Timer.styled';
import { setWorkerInterval, clearWorkerTimer } from 'set-worker-timer';
import { Button } from 'components/Button/Button';
const sound = require('sounds/sound.mp3');

export const Timer = ({
  exersice,
  onTimerFinished,
}: {
  exersice: IExercise | IWarming;
  onTimerFinished: () => void;
}) => {
  const { duration } = exersice;
  const [seconds, setSeconds] = useState(duration);
  const [isActive, setIsActive] = useState(true);
  const [playEnd] = useSound(sound, { volume: 0.5 });
  let intervalId = useRef<number>();

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      stopTimer();
      playEnd();
      onTimerFinished();
      startTimer();
    }
    // eslint-disable-next-line
  }, [seconds, playEnd]);

  useEffect(() => {
    setSeconds(duration);
  }, [duration, exersice]);

  const stopTimer = () => {
    if (typeof intervalId.current === 'number') {
      clearWorkerTimer(intervalId.current);
      setIsActive(false);
    }
  };

  const startTimer = () => {
    intervalId.current = setWorkerInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);
    setIsActive(true);
  };

  return (
    <TimerWrapper>
      <span>
        {Math.floor(seconds / 60) > 0 && `${Math.floor(seconds / 60)} :`}
        {(seconds % 60).toString().padStart(2, '0')}
      </span>
      <Button
        title={
          isActive ? (
            <img src={stopImg} alt="Stop" />
          ) : (
            <img src={startImg} alt="Start" />
          )
        }
        onClick={isActive ? stopTimer : startTimer}
        primary
        round={{ diameter: 50 }}
      />
    </TimerWrapper>
  );
};
