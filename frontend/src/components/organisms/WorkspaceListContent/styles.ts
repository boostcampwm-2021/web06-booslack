import styled from 'styled-components';
import { theme } from 'styled-tools';
import SelectWorkspace from '@molecules/SelectWorkspace';
import BrowseChannelHeader from '@molecules/BrowseChannelHeader';
import { defaultTheme } from '@global/theme';
import { hoverChangeColor } from '@global/mixin';

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

export const WorkspaceListContainer = styled.div`
  & > :not(:first-child) {
    border-top: 1px solid #ebeaeb;
  }
`;

export const StyledDiv = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  background-color: #fff;

  flex-direction: row;
  justify-content: space-between;
  overflow: visible;
  ${hoverChangeColor}

  & > * {
    margin: 10px 20px 3px 20px;
  }
`;

export const StyledSelectWorkspace = styled(SelectWorkspace)``;

export default Container;
