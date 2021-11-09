import styled from 'styled-components';
import { theme } from 'styled-tools';
import { defaultTheme } from '@global/theme';

export const Container = styled.div`
  /* height: calc(100vh-38px); */
  width: 20vw;
  background-color: ${theme('backgroundColor', defaultTheme.backgroundColor)};
`;

export default Container;
