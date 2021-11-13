import styled from 'styled-components';
import Button from 'components/Button/Button';

export const ServiceName = styled.button`
  border: none;
  background-color: transparent;
  font-size: 16px;
  color: var(--white);
  border-bottom: 1px solid transparent;
  transition: border-bottom 200ms linear;
  &:hover,
  &:focus {
    border-bottom: 1px solid var(--white);
    transition: border-bottom 200ms linear;
  }
`;
export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  list-style: none;
`;
export const Li = styled.li`
  &:not(:last-child) {
    margin-right: 60px;
  }
`;

export const ModalButton = styled(Button)`
  margin: 0 auto;
  margin-top: 30px;
`;
