import AboutInfo from 'components/AboutInfo/AboutInfo';
import { StyledFooter, P } from './styled';

export default function Footer() {
  return (
    <StyledFooter>
      <AboutInfo />
      <P>&#9400;&nbsp;2021</P>
    </StyledFooter>
  );
}
