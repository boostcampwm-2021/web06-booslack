import styled from 'styled-components';
import { theme } from 'styled-tools';
import { defaultTheme } from '@global/theme';
import { scrollIfHover } from '@global/mixin';

export const Container = styled.div`
  width: 18vw;
  min-width: 18vw;
  height: 100vh;
  background-color: ${theme('backgroundColor', defaultTheme.backgroundColor)};

  ${scrollIfHover}
`;

export const MarginDiv = styled.div`
  margin-top: 20vh;
`;

export default Container;
