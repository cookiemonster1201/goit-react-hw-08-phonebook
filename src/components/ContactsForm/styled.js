import styled from 'styled-components';
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 250px;
  margin-bottom: 35px;
`;
export const Input = styled.input`
  max-width: 380px;
  width: 100%;
  padding: 12px;
  font-size: 18px;
  color: #495057;
  background-color: var(--white);
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  &::placeholder {
    font-size: 16px;
  }
`;
