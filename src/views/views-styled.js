import styled from 'styled-components';
import { backgroundColor, textColor } from 'redux/theme/themes';

export const Main = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0 100px;
`;
export const ViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${backgroundColor};
  color: ${textColor};
`;
