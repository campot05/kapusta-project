// import { lazy } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import { PrivateRoute } from 'routes/PrivateRoutes';
// import { RestrictedRoute } from 'routes/RestrictedRoute';
// import Layout from 'pages/Layout/Layout';
import Header from './Header/Header.jsx';

// const AuthPage = lazy(() => import('../pages/AuthPage/AuthPage.jsx'));
// const Operations = lazy(() => import('../pages/Operations/Operations'));
// const Report = lazy(() => import('../pages/Report/Report'));
export const App = () => {
  return (
    <Header />

    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<AuthPage />} />
    //     <Route path="/operations" element={<Operations />} />
    //     <Route path="/report" element={<Report />} />
    //     <Route path="*" element={<div>page not found</div>} />
    //   </Route>
    // </Routes>
  );
};
