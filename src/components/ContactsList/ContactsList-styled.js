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
  align-items: center;
  padding: 5px;
  width: 650px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
`;

export const P = styled.p`
  font-size: 20px;
  text-align: center;
  padding: 40px;
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 15px;
`;
