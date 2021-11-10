import { defaultTheme } from '@global/theme';
import styled from 'styled-components';
import { theme } from 'styled-tools';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${theme('backgroundColor', defaultTheme.backgroundColor)};
`;

export default Container;
