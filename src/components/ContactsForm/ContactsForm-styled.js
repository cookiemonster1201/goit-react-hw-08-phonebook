import styled from 'styled-components';
import { inputBgColor } from 'redux/theme/themes';
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
  border: 1px solid rgba(0, 0, 0, 0.25);
  background-color: ${inputBgColor};
  border-radius: 5px;
  &::placeholder {
    font-size: 16px;
  }
`;
