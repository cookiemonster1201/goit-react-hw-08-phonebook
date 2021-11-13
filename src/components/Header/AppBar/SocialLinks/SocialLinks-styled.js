import styled from 'styled-components';
import { iconFill } from 'redux/theme/themes';

export const Ul = styled.ul`
  display: flex;
  align-items: center;

  list-style: none;
`;
export const Li = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
export const Link = styled.a`
  transition: fill 200ms linear;
`;
export const IconWrapper = styled.svg`
  fill: ${iconFill};
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: fill 200ms linear;
  &:hover,
  ${Link}:focus > & {
    fill: var(--accent-color);
    transition: fill 200ms linear;
  }
`;
