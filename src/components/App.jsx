import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { useAuth } from 'hooks/index.jsx';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshToken, refreshUser } from 'redux/auth/auth-operations.js';
import { PrivateRoute } from 'routes/PrivateRoutes';
import { RestrictedRoute } from 'routes/RestrictedRoute';
import Layout from 'pages/Layout/Layout';

const AuthPage = lazy(() => import('../pages/AuthPage/AuthPage.jsx'));
const Operations = lazy(() => import('../pages/Operations/Operations'));
const Report = lazy(() => import('../pages/Report/Report'));
const Expenses = lazy(() => import('../pages/Expenses/Expenses'));
export const App = () => {
  const dispatch = useDispatch();
  //   const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshToken())
      .unwrap()
      .then(() => dispatch(refreshUser()))
      .catch(error => null);
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PrivateRoute redirectTo="/login" component={<Operations />} />
          }
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/" component={<AuthPage />} />}
        />
        <Route
          path="/report"
          element={<PrivateRoute redirectTo="/login" component={<Report />} />}
        />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="*" element={<div>page not found</div>} />
      </Route>
    </Routes>
  );
};
