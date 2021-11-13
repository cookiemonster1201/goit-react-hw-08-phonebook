import ContactsForm from 'components/ContactsForm/ContactsForm';
import { HeroSection, HeroWrapper } from './Hero-styled';

export default function Hero() {
  return (
    <HeroSection>
      <HeroWrapper>
        <ContactsForm />
      </HeroWrapper>
    </HeroSection>
  );
}
