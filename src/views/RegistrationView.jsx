import Footer from 'components/Footer/Footer';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import { Main, ViewWrapper } from './styled';
import WelcomeParagraph from 'components/WelcomeParagraph/WelcomeParagraph';

export default function RegistrationView() {
  return (
    <ViewWrapper>
      <Main>
        <WelcomeParagraph />
        <RegistrationForm />
      </Main>
      <Footer />
    </ViewWrapper>
  );
}
