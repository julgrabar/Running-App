import { ReactNode } from 'react';
import { JsxElement } from 'typescript';

export interface ITraining {
  id: number;
  workout_duration: string;
  clear_duration: number;
  is_passed: boolean;
  order: number;
  title: string;
  image: string;
  duration: number;
  repetitions_number: number;
  has_warm_up: boolean;
  has_cool_down: boolean;
  week: number;
  exercises: IExercise[];
}

export interface IWeek {
  id: number;
  is_passed: boolean;
  order: number;
  title: string;
  image: string;
  trainings: ITraining[];
}

interface IExerciseType {
  id?: number;
  title: string;
  description?: string;
  tips?: string;
  image: string;
}
export interface IWorkout {
  title: string;
  workout: (IExercise | IWarming)[];
}
export interface IExercise {
  id: number;
  exercise_type: IExerciseType;
  order: number;
  duration: number;
  training: number;
}
export interface IWarming {
  exercise_type: IExerciseType;
  duration: number;
}

export interface ISignupCridentials {
  username: string;
  password: string;
  password2: string;
  email: string;
}

export interface ILoginCridentials {
  username: string;
  password: string;
}

export interface IButton {
  title: string | ReactNode;
  onClick?: () => void;
  primary?: boolean;
  round?: { diameter: number };
  marginTop?: string;
  type?: 'submit' | 'button' | 'reset';
}

export interface IGoToBtn {
  title: string | ReactNode;
  primary?: boolean;
  path: string;
  marginTop?: string;
}
