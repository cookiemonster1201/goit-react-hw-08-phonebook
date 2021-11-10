import styled from 'styled-components';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(61, 59, 59, 0.6);
  z-index: 1200;
`;
export const ModalDiv = styled.div`
  padding: 50px;
  max-width: 700px;
  width: 100%;
  max-height: 400px;
  height: 100%;
  background-color: #fff;
`;
