import Popup from '@atoms/Popup';
import { ButtonSize } from '@enum/index';
import { RefObject } from 'react';
import styled from 'styled-components';

const { height: ButtonHeight } = ButtonSize;

interface Props {
  x: undefined | number;
  y: undefined | number;
  customRef: RefObject<HTMLElement>;
}

const Container = styled(Popup)<Props>`
  position: absolute;

  ${({ x, y }) => {
    return `top : ${ButtonHeight + y}px; left: ${x - 250}px;`;
  }}
  background-color: white;
  width: 300px;
  height: 300px;

  border: 1px solid black;
  border-radius: 6px;
  overflow: hidden;

  background-color: ivory;
`;

export default Container;
