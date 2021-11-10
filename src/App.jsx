import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { AnimatedSwitch } from 'react-router-transition';
// import { ThemeProvider } from 'styled-components';
import Loader from 'react-loader-spinner';
import s from 'animations/route-transitions.module.css';
import { bounceTransition, mapStyles } from 'animations/animated-switch';
import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Container>
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
            <Route path="/login">
              <LoginView />
            </Route>

            <Route path="/register" exact>
              <RegistrationView />
            </Route>

            <Route path="/contacts" exact>
              <ContactsView />
            </Route>
            <Redirect to="/login" />
          </AnimatedSwitch>
        </Suspense>
      </Container>
      <ToastContainer />
    </>
  );
}
