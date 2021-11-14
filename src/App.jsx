import { ToastContainer } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { AnimatedSwitch } from 'react-router-transition';
import Loader from 'react-loader-spinner';
import s from 'animations/route-transitions.module.css';
import { bounceTransition, mapStyles } from 'animations/animated-switch';
import Container from 'components/Container/Container';
import DarkThemeProvider from 'components/DarkThemeProvider/DarkThemeProvider';
import Header from 'components/Header/Header';
import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRroute';
import { getIsRefreshing } from 'redux/auth/auth-selectors';
import { refreshUser } from 'redux/auth/auth-operations';
const ContactsView = lazy(() =>
  import('views/ContactsView'),
); /* WebpackChunkName: "contacts-view" */
const LoginView = lazy(() =>
  import('views/LoginView'),
); /* WebpackChunkName: "login-view" */
const RegistrationView = lazy(() =>
  import('views/RegistrationView'),
); /* WebpackChunkName: "registration-view" */

export default function App() {
  const isRefreshing = useSelector(getIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <DarkThemeProvider>
        <Container>
          {isRefreshing ? (
            <h1>ha</h1>
          ) : (
            <>
              <Header />
              <Suspense
                fallback={
                  <Loader
                    type="Oval"
                    color="#fffb1e"
                    height={80}
                    width={80}
                    style={{ textAlign: 'center' }}
                  />
                }
              >
                <AnimatedSwitch
                  atEnter={bounceTransition.atEnter}
                  atLeave={bounceTransition.atLeave}
                  atActive={bounceTransition.atActive}
                  mapStyles={mapStyles}
                  className={s.routeWrapper}
                  runOnMount
                >
                  <PublicRoute path="/login" restricted exact>
                    <LoginView />
                  </PublicRoute>

                  <PublicRoute path="/register" restricted exact>
                    <RegistrationView />
                  </PublicRoute>

                  <PrivateRoute path="/contacts" exact>
                    <ContactsView />
                  </PrivateRoute>
                  <Redirect to="/login" />
                </AnimatedSwitch>
              </Suspense>
            </>
          )}
        </Container>
        <ToastContainer />
      </DarkThemeProvider>
    </>
  );
}
