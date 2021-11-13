import Footer from 'components/Footer/Footer';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import { Main, ViewWrapper } from './views-styled';
import WelcomeParagraph from 'components/WelcomeParagraph/WelcomeParagraph';
import { footerHeight } from 'constants/constants';

export default function RegistrationView() {
  return (
    <ViewWrapper style={{ height: `calc(100vh - ${footerHeight}px)` }}>
      <Main>
        <WelcomeParagraph />
        <RegistrationForm />
      </Main>
      <Footer />
    </ViewWrapper>
  );
}
