import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
