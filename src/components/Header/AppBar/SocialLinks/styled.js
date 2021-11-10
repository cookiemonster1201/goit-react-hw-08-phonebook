import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  background-color: #fff;
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
  fill: #495057;
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: fill 200ms linear;
  &:hover,
  ${Link}:focus > & {
    fill: #e99f17;
    transition: fill 200ms linear;
  }
`;
