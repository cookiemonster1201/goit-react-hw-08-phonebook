import logo from './logo.png';
import AppBar from 'components/Header/AppBar/AppBar';
import { PageHeader, Div, Wrapper, Span } from './styled';

export default function Header() {
  return (
    <PageHeader>
      <Wrapper>
        <Span>PB</Span>
        <img src={logo} alt="service logo" width="40" height="40"></img>
      </Wrapper>
      <Div>
        <AppBar />
      </Div>
    </PageHeader>
  );
}
