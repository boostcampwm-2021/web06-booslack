import styled from 'styled-components';
import { theme } from 'styled-tools';
import { PacmanLoader } from 'react-spinners';
import { flexAlignCenter } from '@global/style/mixin';
import { defaultTheme } from '@global/style/theme';

const Container = styled.div`
  width: inherit;
  height: 600px;
  background: transparent;
  border: 0px solid;
  ${flexAlignCenter}
  overflow : hidden;
`;

export const SpinnerContainer = styled.div`
  width: 55vw;
  min-width: 300px;
  height: 60px;
`;

export const MarginDiv = styled.div`
  margin-top: 50px;
`;

export const LoadingSpinner = styled(PacmanLoader)`
  margin-top: 50px;
  background-color: ${theme('backgroundColor', defaultTheme.backgroundColor)};
`;

export default Container;
