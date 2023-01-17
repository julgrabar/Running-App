import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PublicRoute } from './CustomRoutes/PublicRoute';
import { lazy } from 'react';
import NotFoundPage from 'pages/NotFoundPage';

const HomePage = lazy(() => import('pages/HomePage'));
const AuthPage = lazy(() => import('pages/AuthPage'));
const WorkoutPage = lazy(() => import('pages/WorkoutPage'));
const WeeksPage = lazy(() => import('pages/WeeksPage'));
const WeekTrainingsPage = lazy(() => import('pages/TrainingsPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="trainings">
          <Route index element={<WeeksPage />} />
          <Route path=":weekId">
            <Route index element={<WeekTrainingsPage />} />
            <Route path=":workoutId" element={<WorkoutPage />} />
          </Route>
        </Route>
        <Route
          path="login"
          element={
            <PublicRoute restricted>
              <AuthPage login />
            </PublicRoute>
          }
        />
        <Route
          path="signup"
          element={
            <PublicRoute restricted>
              <AuthPage signup />
            </PublicRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
