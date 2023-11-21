import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { refreshUser } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import Loader from '../Loader';

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
import { AppWrapper, ToastContainerStyled } from './App.styled';
import ExercisesList from '../ExercisesList';
import { selectUserAuthenticated } from '../../redux/selectors.js';
import { selectWorkoutsIsLoading } from '../../redux/selectors.js';
import { selectUserProfileIsLoading } from '../../redux/selectors.js';
import { selectProductsIsLoading } from '../../redux/selectors.js';
import { selectMealsIsLoading } from '../../redux/selectors.js';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useAuth();
  const { profile } = useSelector((state) => state.profile);
  // const auth = useSelector(selectUserAuthenticated);
  const workoutIsLoading = useSelector(selectWorkoutsIsLoading);
  const profileIsLoading = useSelector(selectUserProfileIsLoading);
  const productIsLoading = useSelector(selectProductsIsLoading);
  const mealsIsLoading = useSelector(selectMealsIsLoading);

  let isFilled = isLoggedIn && profile ? true : false;

  // if (isLoggedIn && profile) {
  //   const profileArray = profile
  //     ? [
  //         profile.height,
  //         profile.currentWeight,
  //         profile.desiredWeight,
  //         profile.blood,
  //         profile.sex,
  //         profile.levelActivity,
  //         profile.birthday,
  //       ]
  //     : [];

  //   for (let item of profileArray) {
  //     if (item) {
  //       isFilled = true;
  //     } else {
  //       isFilled = false;
  //       break;
  //     }
  //   }
  // }

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (location.pathname === '/') {
    return <Navigate to="/welcome" />;
  }

  if (location.pathname === '/exercises') {
    return <Navigate to="/exercises/body parts" />;
  }

  return isRefreshing &&
    workoutIsLoading &&
    profileIsLoading &&
    productIsLoading &&
    mealsIsLoading ? (
    <Loader />
  ) : (
    <AppWrapper>
      <ToastContainerStyled />
      <Routes location={location} key={location.pathname}>
        <Route
          path="/welcome"
          element={
            <Suspense fallback={<Loader />}>
              {isFilled ? (
                <RestrictedRoute redirectTo="/diary" component={<Welcome />} />
              ) : (
                <RestrictedRoute
                  redirectTo="/profile"
                  component={<Welcome />}
                />
              )}
            </Suspense>
          }
        />
        <Route
          path="/signup"
          element={
            <Suspense fallback={<Loader />}>
              {isFilled ? (
                <RestrictedRoute redirectTo="/diary" component={<SignUp />} />
              ) : (
                <RestrictedRoute redirectTo="/profile" component={<SignUp />} />
              )}
            </Suspense>
          }
        />

        <Route
          path="/signin"
          element={
            <Suspense fallback={<Loader />}>
              {isFilled ? (
                <RestrictedRoute redirectTo="/diary" component={<SignIn />} />
              ) : (
                <RestrictedRoute redirectTo="/profile" component={<SignIn />} />
              )}
            </Suspense>
          }
        />

        <Route
          path="/signin/:verificationToken"
          element={
            <Suspense fallback={<Loader />}>
              {isFilled ? (
                <RestrictedRoute redirectTo="/diary" component={<SignIn />} />
              ) : (
                <RestrictedRoute redirectTo="/profile" component={<SignIn />} />
              )}
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
            <Route path="body parts" element={<BodyParts />}></Route>
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
