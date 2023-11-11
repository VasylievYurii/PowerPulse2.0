import { Route, Routes, useLocation } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';
import Loader from '../Loader';
// import RestrictedRoute from '../RestrictedRoute';
// import PrivateRoute from '../PrivateRoute';
import SharedLayout from '../SharedLayout';

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
const ErrorPage = lazy(() => import('../../pages/ErrorPage/ErrorPage'));

function App() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/welcome" element={<Welcome />} />

        <Route
          path="/profile"
          element={
            <Suspense fallback={<Loader />}>
              <Profile />
            </Suspense>
          }
        />

        <Route
          path="/products"
          element={
            <Suspense fallback={<Loader />}>
              <Products />
            </Suspense>
          }
        />

        <Route
          path="/diary"
          element={
            <Suspense fallback={<Loader />}>
              <Diary />
            </Suspense>
          }
        />

        <Route
          path="/exercises"
          element={
            <Suspense fallback={<Loader />}>
              <Exercises />
            </Suspense>
          }
        >
          <Route path="bodyparts" element={<BodyParts />} />
          <Route path="muscles" element={<Muscles />} />
          <Route path="equipment" element={<Equipment />} />
        </Route>

        <Route
          path="/signup"
          element={
            <Suspense fallback={<Loader />}>
              <SignUp />
            </Suspense>
          }
        ></Route>

        <Route
          path="/signin"
          element={
            <Suspense fallback={<Loader />}>
              <SignIn />
            </Suspense>
          }
        />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
