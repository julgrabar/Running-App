import { warming } from 'warming';
import { ITraining, IWorkout } from 'types/types';

export function makeWorkout(training: ITraining | undefined): IWorkout | null {
  if (!training) {
    return null;
  }
  let { exercises, repetitions_number } = training;
  let workout = [];
  workout.push(warming);

  for (let i = 1; i <= repetitions_number; i += 1) {
    workout = [...workout, ...exercises];
  }
  workout.push(warming);
  return { title: training.title, workout };
}
