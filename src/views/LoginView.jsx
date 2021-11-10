import LoginForm from 'components/LoginForm/LoginForm';
import Footer from 'components/Footer/Footer';
import { ViewWrapper } from './styled';
import WelcomeParagraph from 'components/WelcomeParagraph/WelcomeParagraph';
import { Main } from './styled';

export default function LoginView() {
  return (
    <>
      <ViewWrapper>
        <Main>
          <WelcomeParagraph />
          <LoginForm />
        </Main>
        <Footer />
      </ViewWrapper>
    </>
  );
}
