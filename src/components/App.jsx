import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from 'hooks/index.jsx';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshToken, refreshUser } from 'redux/auth/auth-operations.js';
import { PrivateRoute } from 'routes/PrivateRoutes';
import { RestrictedRoute } from 'routes/RestrictedRoute';
import Layout from 'pages/Layout/Layout';
import SwitchProvider from 'contexts/SwitchProvider.js';

const AuthPage = lazy(() => import('../pages/AuthPage/AuthPage.jsx'));
const Operations = lazy(() => import('../pages/Operations/Operations'));
const Report = lazy(() => import('../pages/Report/Report'));
const IncomePage = lazy(() => import('../pages/IncomePage/IncomePage'))
export const App = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) return;
    dispatch(refreshToken())
      .unwrap()
      .then(() => dispatch(refreshUser()))
      .catch(error => null);
    // eslint-disable-next-line
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
        <Route path='/income' element={<PrivateRoute redirectTo='/login' component={<IncomePage/> } /> } />
        <Route
          path="/report"
          element={
            <PrivateRoute
              redirectTo="/login"
              component={
                <SwitchProvider>
                  <Report />
                </SwitchProvider>
              }
            />
          }
        />
        <Route path="*" element={<div>page not found</div>} />
      </Route>
    </Routes>
  );
};
