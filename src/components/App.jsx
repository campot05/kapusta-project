import Header from './Header/Header';
import Table from './Table/Table';

export const App = () => {
  return (
    <>
      <Header />
      <Table />
    </>
  );
};

// import { lazy } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import { PrivateRoute } from 'routes/PrivateRoutes';
// import { RestrictedRoute } from 'routes/RestrictedRoute';
// import { Suspense } from 'react';

// const Home = lazy(() => import('../pages/Home'));
// import Home from 'pages/Home';
//  <Suspense fallback={<div>Loading...</div>}>
//    <Routes>
//      <Route path="/" element={<Home />}></Route>
//    </Routes>
//  </Suspense>
