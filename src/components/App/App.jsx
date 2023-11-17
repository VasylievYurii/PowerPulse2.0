import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import Loader from '../Loader';
import { ToastContainer } from 'react-toastify';
import RestrictedRoute from '../RestrictedRoute';
import PrivateRoute from '../PrivateRoute';
import SharedLayout from '../SharedLayout';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';

const Welcome = lazy(() => import('../../pages/Welcome/Welcome'));
const Profile = lazy(() => import('../../pages/Profile'));
const Products = lazy(() => import('../../pages/Products'));
const Diary = lazy(() => import('../../pages/Diary'));
const Exercises = lazy(() => import('../../pages/Exercises'));
const BodyParts = lazy(() => import('../../pages/BodyParts'));
const Muscles = lazy(() => import('../../pages/Muscles'));
const Equipment = lazy(() => import('../../pages/Equipment'));
const SignUp = lazy(() => import('../../pages/SignUp'));
const SignIn = lazy(() => import('../../pages/SignIn'));
import { AppWrapper } from './App.styled';
import ExercisesList from '../ExercisesList';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (location.pathname === '/') {
    return <Navigate to="/welcome" />;
  }

  if (location.pathname === '/exercises') {
    return <Navigate to="/exercises/bodyparts" />;
  }

  return isRefreshing ? (
    <Loader />
  ) : (
    <AppWrapper>
      <ToastContainer />
      <Routes location={location} key={location.pathname}>
        <Route
          path="/welcome"
          element={
            <Suspense fallback={<Loader />}>
              <RestrictedRoute redirectTo="/profile" component={<Welcome />} />
            </Suspense>
          }
        />
        <Route
          path="/signup"
          element={
            <Suspense fallback={<Loader />}>
              <RestrictedRoute redirectTo="/profile" component={<SignUp />} />
            </Suspense>
          }
        />

        <Route
          path="/signin"
          element={
            <Suspense fallback={<Loader />}>
              <RestrictedRoute redirectTo="/profile" component={<SignIn />} />
            </Suspense>
          }
        />
        <Route path="/" element={<SharedLayout />}>
          <Route
            path="/profile"
            element={
              <Suspense fallback={<Loader />}>
                <PrivateRoute redirectTo="/welcome" component={<Profile />} />
              </Suspense>
            }
          />

          <Route
            path="/products"
            element={
              <Suspense fallback={<Loader />}>
                <PrivateRoute redirectTo="/welcome" component={<Products />} />
              </Suspense>
            }
          />

          <Route
            path="/diary"
            element={
              <Suspense fallback={<Loader />}>
                <PrivateRoute redirectTo="/welcome" component={<Diary />} />
              </Suspense>
            }
          />

          <Route
            path="/exercises"
            element={
              <Suspense fallback={<Loader />}>
                <PrivateRoute redirectTo="/welcome" component={<Exercises />} />
              </Suspense>
            }
          >
            <Route path="bodyparts" element={<BodyParts />}></Route>
            <Route path="muscles" element={<Muscles />}></Route>
            <Route path="equipment" element={<Equipment />}></Route>
          </Route>
          <Route path="/exercises/:filter/:id" element={<ExercisesList />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
