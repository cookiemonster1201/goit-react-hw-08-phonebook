import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
`;

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  width: 550px;
  font-size: 20px;
  color: #495057;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const P = styled.p`
  color: #495057;
  font-size: 20px;
  text-align: center;
  padding: 40px;
`;
