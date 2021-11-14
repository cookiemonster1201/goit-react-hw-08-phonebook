import styled from 'styled-components';
import { Form, Input } from 'components/ContactsForm/ContactsForm-styled';
import { boxShadow } from 'redux/theme/themes';

export const StyledAuthForm = styled(Form)`
  flex-direction: column;
  height: 450px;
  max-width: 500px;
  width: 100%;
  margin-top: 50px;
  border: 1px solid #cfcfcf;
  border-radius: 3px;
  box-shadow: ${boxShadow};
`;
export const StyledInput = styled(Input)`
  margin-bottom: 40px;
`;
