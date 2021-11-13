import LoginForm from 'components/LoginForm/LoginForm';
import Footer from 'components/Footer/Footer';
import { ViewWrapper } from './views-styled';
import WelcomeParagraph from 'components/WelcomeParagraph/WelcomeParagraph';
import { Main } from './views-styled';
import { footerHeight } from 'constants/constants';

export default function LoginView() {
  return (
    <>
      <ViewWrapper style={{ height: `calc(100vh - ${footerHeight}px)` }}>
        <Main>
          <WelcomeParagraph />
          <LoginForm />
        </Main>
        <Footer />
      </ViewWrapper>
    </>
  );
}
