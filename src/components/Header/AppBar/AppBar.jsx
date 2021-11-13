import UserMenu from 'components/Header/AppBar/UserMenu/UserMenu';
import SocialLinks from './SocialLinks/SocialLinks';
import { Wrapper } from './AppBar-styled';

export default function AppBar() {
  return (
    <Wrapper>
      <SocialLinks />
      <UserMenu />
    </Wrapper>
  );
}
