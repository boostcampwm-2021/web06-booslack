import Popup from '@atoms/Popup';
import { ButtonSize } from '@enum/index';
import styled from 'styled-components';

const { height: ButtonHeight } = ButtonSize;

const Container = styled(Popup)`
  position: absolute;
  top: ${ButtonHeight}px;

  background-color: white;
  width: 300px;
  height: 300px;

  transform: translate(-(294.92 -81.92) px, 0);
  border: 1px solid black;
  border-radius: 6px;
  overflow: hidden;

  background-color: ivory;
`;

export default Container;
