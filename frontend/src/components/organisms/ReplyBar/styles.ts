import styled from 'styled-components';
import { scrollIfHover } from '@global/mixin';

const Container = styled.div<{ widthVW: number; isOpened: boolean }>`
  display: ${({ isOpened }) => (isOpened ? 'flex' : 'none')};
  width: ${({ widthVW }) => widthVW}vw;
  height: 100vh;
  background-color: red;

  ${scrollIfHover}
`;

export const MarginDiv = styled.div`
  margin-top: 20vh;
`;

export default Container;
