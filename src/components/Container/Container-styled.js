import styled from 'styled-components';
import { backgroundColor, textColor } from 'redux/theme/themes';

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: ${backgroundColor};
  color: ${textColor};

  @media screen and (min-width: var(--mobile-width-container)) {
    width: var(--mobile-width-container);
  }

  @media screen and (min-width: var(--tablet-width-container)) {
    width: var(--tablet-width-container);
  }

  @media screen and (min-width: var(--desktop-width-container)) {
    width: var(--desktop-width-container);
  }
`;
