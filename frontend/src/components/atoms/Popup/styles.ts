import styled from 'styled-components';

<<<<<<< HEAD
interface Props {
  row: number;
  visible: boolean;
  children: JSX.Element | JSX.Element[];
}

const { height: ButtonHeight } = ButtonSize;
=======
export const Container = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
`;
>>>>>>> refactor: Popup 아톰 리팩토링

export const Content = styled.div<{ zIndex: number }>`
  position: absolute;
<<<<<<< HEAD
  top: ${ButtonHeight}px;

  background-color: white;
  width: 300px;
  height: 300px;

  transform: translate(-${({ row }) => 294.92 - row}px, 0);
  border: 1px solid black;
  border-radius: 6px;
  overflow: hidden;

  box-shadow: 0 0 0 1 px grey, 0 4 px 12 px 0 rgba(0, 0, 0, 0.12);
=======
  z-index: ${({ zIndex }) => zIndex};
>>>>>>> refactor: Popup 아톰 리팩토링
`;

export const Overlay = styled.div<{ zIndex: number }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: ${({ zIndex }) => zIndex - 1};
`;
