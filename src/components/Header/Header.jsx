import AppBar from 'components/Header/AppBar/AppBar';
import { PageHeader, Div, Wrapper, Span } from './styled';
import { ReactComponent as Logo } from './logo.svg';
import { LogoWrapper } from './styled';
import ThemeToggle from 'components/ThemeToggle/ThemeToggle';

export default function Header() {
  return (
    <PageHeader>
      <Wrapper>
        <ThemeToggle />
        <Span>PB</Span>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      </Wrapper>
      <Div>
        <AppBar />
      </Div>
    </PageHeader>
  );
}
