import styled from 'styled-components';
import { theme } from 'styled-tools';
import { defaultTheme } from '@global/theme';
import { RoundScrollBar } from '@global/mixin';

export const Container = styled.div`
  width: 18vw;
  min-width: 18vw;
  height: 100vh;
  background-color: ${theme('backgroundColor', defaultTheme.backgroundColor)};

  overflow-x: hidden;
  overflow-y: hidden;
  &:hover {
    overflow-x: hidden;
    overflow-y: scroll;
    ${RoundScrollBar}
  }
`;

export const MarginDiv = styled.div`
  margin-top: 20vh;
`;

export default Container;
