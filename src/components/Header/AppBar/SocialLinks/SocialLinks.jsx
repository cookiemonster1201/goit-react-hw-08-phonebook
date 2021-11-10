import { ReactComponent as LinkedIn } from './icons/linkedin.svg';
import { ReactComponent as Facebook } from './icons/facebook.svg';
import { ReactComponent as Instagram } from './icons/instagram.svg';
import { IconWrapper, Ul, Li, Link } from './styled';

export default function SocialLinks() {
  return (
    <Ul>
      <Li>
        <Link href="#" target="_blank" aria-label="facebook">
          <IconWrapper>
            <Facebook />
          </IconWrapper>
        </Link>
      </Li>
      <Li>
        <Link href="#" target="_blank" aria-label="instagram">
          <IconWrapper>
            <Instagram />
          </IconWrapper>
        </Link>
      </Li>

      <Li>
        <Link href="#" target="_blank" aria-label="linkedIn">
          <IconWrapper>
            <LinkedIn />
          </IconWrapper>
        </Link>
      </Li>
    </Ul>
  );
}
