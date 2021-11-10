import styled from 'styled-components';
import BrowseChannelHeader from '@molecules/BrowseChannelHeader';
import { theme } from 'styled-tools';
import { defaultTheme } from '@global/theme';

export const StyledHeader = styled(BrowseChannelHeader)`
  background-color: ${theme('smallHeaderColor', defaultTheme.smallHeaderColor)};
  z-index: 900;
`;

export const Container = styled.main`
  width: 70vw;
  height: 50vh;
  background-color: #fff;
  margin-top: 30vh;
`;

export default Container;
