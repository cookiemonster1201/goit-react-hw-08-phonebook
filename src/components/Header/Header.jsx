import AppBar from 'components/Header/AppBar/AppBar';
import { PageHeader, Div, Wrapper, Span } from './Header-styled';
import { ReactComponent as Logo } from './logo.svg';
import { LogoWrapper } from './Header-styled';
import ThemeToggle from 'components/ThemeToggle/ThemeToggle';

export default function Header() {
  return (
    <PageHeader>
      <Wrapper>
        <ThemeToggle />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Span>PB</Span>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        </div>
      </Wrapper>
      <Div>
        <AppBar />
      </Div>
    </PageHeader>
  );
}
