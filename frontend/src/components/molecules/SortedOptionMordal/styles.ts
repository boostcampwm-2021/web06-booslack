import { RefObject } from 'react';
import Popup from '@atoms/Popup';
import { ButtonSize } from '@enum/index';
import { flexAlignCenter } from '@global/style/mixin';
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
    return `top : ${ButtonHeight + y + 10}px; left: ${x - 61}px;`;
  }}
  background-color: white;
  width: 200px;
  height: 130px;

  --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
  box-shadow: 0 0 0 1px var(--saf-0), 0 4px 12px 0 rgba(0, 0, 0, 0.12);
  background-color: rgba(var(--sk_foreground_min_solid, 248, 248, 248), 1);
  border-radius: 6px;
  padding: 0.1px 0;
`;

export const StyledDiv = styled.div`
  display: flx;
  ${flexAlignCenter}
  flex-direction : row;
  width: 100%;
  height: 20px;
  margin: 5px 0 10px 0;

  & > * {
    margin-right: 5px;
  }
`;
export default Container;
