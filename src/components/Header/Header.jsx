import AppBar from 'components/Header/AppBar/AppBar';
import { PageHeader, Div, Wrapper, Span } from './Header-styled';
import { ReactComponent as Logo } from './logo.svg';
import { LogoWrapper } from './Header-styled';
import ThemeToggle from 'components/ThemeToggle/ThemeToggle';

import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log(response);
}


export default function Header() {
  return (
    <PageHeader>
      <Wrapper>
        <ThemeToggle />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Span>PB</Span>
          <FacebookLogin
            appId="1423018008123489"
            autoLoad={true}
            fields="name,email,picture"
            onClick={() => {console.log('hi')}}
            callback={responseFacebook} />
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
