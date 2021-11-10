import styled from 'styled-components';

export const PageHeader = styled.header`
  display: flex;
  flex-direction: column;

  min-height: 50px;
  border-bottom: 1px solid #e99f17;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 90px;

  background-color: #e99f17;
`;

export const Span = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #2f3438;
`;
