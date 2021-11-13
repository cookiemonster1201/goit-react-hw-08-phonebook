import styled from 'styled-components';

const toggleBackgroundColorOn = `rgb(82, 79, 79)`;
const toggleBackgroundColorOff = `rgb(201, 201, 201)`;
const toggleControlColor = `rgb(255, 255, 255)`;
const toggleWidth = '46px';
const toggleHeight = '24px';
const toggleGutter = '2px';
const toggleControlSpeed = '0.15s';
const toggleControlEase = 'ease-in';
const toggleRadius = '12px';

export const ToggleControl = styled.label`
  display: block;
  position: relative;
  padding-left: ${toggleWidth};
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
`;

export const Control = styled.span`
  position: absolute;
  top: -10px;
  left: 0;
  height: ${toggleHeight};
  width: ${toggleWidth};
  border-radius: ${toggleRadius};
  background-color: ${toggleBackgroundColorOff};
  transition: background-color ${toggleControlSpeed} ${toggleControlEase};
  &:after {
    content: '';
    position: absolute;
    left: ${toggleGutter};
    top: ${toggleGutter};
    width: 20px;
    height: 20px;
    border-radius: ${toggleRadius};
    background: ${toggleControlColor};
    transition: transform ${toggleControlSpeed} ${toggleControlEase};
  }
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  &:checked ~ ${Control} {
    background-color: ${toggleBackgroundColorOn};
    &:after {
      transform: translateX(22px);
    }
  }
`;
