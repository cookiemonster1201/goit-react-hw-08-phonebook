import styled from 'styled-components';

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Li = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Form = styled.form`
  flex-grow: 1;
  text-align: center;
`;
