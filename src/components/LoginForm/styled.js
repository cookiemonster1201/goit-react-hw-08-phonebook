import styled from 'styled-components';
import { Form, Input } from 'components/ContactsForm/styled';

export const StyledAuthForm = styled(Form)`
  flex-direction: column;
  height: 450px;
  max-width: 500px;
  width: 100%;
  margin-top: 50px;
  border: 1px solid #cfcfcf;
  border-radius: 3px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
export const StyledInput = styled(Input)`
  margin-bottom: 40px;
`;
