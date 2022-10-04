import { warming } from 'warming';
import { IExercise, ITraining, IWarming } from 'types/types';

export function makeWorkout({
  exercises,
  repetitions_number,
}: ITraining): (IWarming | IExercise)[] {
  let workout = [];
  workout.push(warming);

  for (let i = 1; i <= repetitions_number; i += 1) {
    workout = [...workout, ...exercises];
  }
  workout.push(warming);
  return workout;
}
