import styled from 'styled-components';
export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  width: ${props => (props.big ? '180px' : '90px')};
  padding: ${props => (props.big ? '14px 25px' : '5px 3px')};
  text-transform: ${props => (props.big ? 'uppercase' : 'lowercase')};
  font-size: ${props => (props.big ? '16px' : '14px')};
  color: #fff;
  background: var(--accent-color);
  border: 1px solid var(--accent-color);
  border-radius: 7px;

  transition: color 250ms linear, background-color 250ms linear;

  &:hover,
  &:focus {
    color: var(--accent-color);
    background: var(--white);
  }
`;
