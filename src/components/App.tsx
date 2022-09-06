import { WeeksPage } from '../pages/WeeksPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { WeekTrainingsPage } from 'pages/TrainingsPage';
import { WorkoutPage } from 'pages/WorkoutPage';
import { HomePage } from 'pages/HomePage';
import { LoginPage } from 'pages/LoginPage';
import { SignupPage } from 'pages/SignupPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="trainings">
          <Route index element={<WeeksPage/>} />
          <Route path=":weekId" >
            <Route index element={<WeekTrainingsPage/>}/>
            <Route path=":workoutId" element={<WorkoutPage/>}/>
          </Route>
        </Route>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="signup" element={<SignupPage/>}/>
      </Route>  
    </Routes>
  );
}

export default App;
