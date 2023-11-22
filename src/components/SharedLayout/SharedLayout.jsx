import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
