import { ButtonSize } from '@enum/index';
import styled from 'styled-components';

interface Props {
  visible: boolean;
  children: JSX.Element;
}

const { width: ButtonWidth, height: ButtonHeight } = ButtonSize;

const Container = styled.div<Props>`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  position: absolute;
  top: ${ButtonHeight}px;

  background-color: white;
  width: 300px;
  height: 300px;

  transform: translate(-${294.92 - ButtonWidth}px, 0);
  border: 1px solid black;
  border-radius: 6px;
  overflow: hidden;

  box-shadow: 0 0 0 1 px grey, 0 4 px 12 px 0 rgba(0, 0, 0, 0.12);
`;

export default Container;
