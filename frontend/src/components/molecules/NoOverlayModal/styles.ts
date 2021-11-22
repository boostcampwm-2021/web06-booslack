import Popup from '@atoms/Popup';
import { RefObject } from 'react';
import styled from 'styled-components';

interface Props {
  x: undefined | number;
  y: undefined | number;
  customRef: RefObject<HTMLElement>;
}

const Container = styled(Popup)<Props>`
  position: absolute;

  ${({ x, y }) => {
    return `top : ${y}px; left: ${x}px;`;
  }}
  background-color: #F8F8F8;

  border: 1px solid black;
  box-shadow: 0 0 0 1px rgb(29 28 29 / 13%), 0 4px 12px 0 rgb(0 0 0 / 12%);
  border-radius: 6px;
  overflow: hidden;
`;

export default Container;
