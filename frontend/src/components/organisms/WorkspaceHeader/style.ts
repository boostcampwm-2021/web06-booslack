import styled from 'styled-components';
import { theme } from 'styled-tools';
import { defaultTheme } from '@global/theme';

export const Container = styled.div`
  height: 38px;
  width: 100vw;
  background-color: ${theme('bigHeaderColor', defaultTheme.bigHeaderColor)};
`;

export default Container;
