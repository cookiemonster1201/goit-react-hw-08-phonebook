import styled from 'styled-components';
import heroPicture from './getty_510591490_356091.jpeg';

export const HeroSection = styled.section`
  padding-top: 130px;
  padding-bottom: 130px;
  width: 100%;
  margin: 0 auto;
  max-width: 1600px;
  background-color: #c4c4c4;
  background-image: radial-gradient(
      rgba(236, 227, 227, 0.4),
      rgba(34, 34, 33, 0.4)
    ),
    url(${heroPicture});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const HeroWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 800px;
`;
