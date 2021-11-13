import styled from 'styled-components';
import { IconWrapper } from './AppBar/SocialLinks/SocialLinks-styled';

export const PageHeader = styled.header`
  display: flex;
  flex-direction: column;
  min-height: 50px;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 90px;

  background-color: var(--accent-color);
`;

export const Span = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: var(--white);
`;

export const LogoWrapper = styled(IconWrapper)`
  width: 35px;
  height: 35px;
  fill: var(--white);
  margin-left: 10px;
  &:hover {
    fill: var(--white);
  }
`;
