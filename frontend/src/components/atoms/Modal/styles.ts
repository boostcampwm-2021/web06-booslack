import styled from 'styled-components';

export const Container = styled.div<{ visible: string }>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: fixed;
  background-color: ivory;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

export const Overlay = styled.div<{ visible: string }>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
`;
