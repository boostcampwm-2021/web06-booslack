import styled from 'styled-components';
import { theme } from 'styled-tools';
import LabeledButton from '@atoms/LabeledButton';
import SelectWorkspace from '@molecules/SelectWorkspace';
import BrowseChannelHeader from '@molecules/BrowseChannelHeader';
import { defaultTheme } from '@global/theme';
import { hoverChangeColor } from '@global/mixin';

export const StyledHeader = styled(BrowseChannelHeader)`
  background-color: ${theme('smallHeaderColor', defaultTheme.smallHeaderColor)};
  z-index: 3;
`;

export const Container = styled.main`
  position: relative;
  width: 70vw;
  background-color: #fff;
  margin-top: 30vh;
`;

export const WorkspaceListContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > :not(:first-child) {
    border-top: 1px solid #ebeaeb;
  }
  & > :last-child {
    color: #1264a3;
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

export const StyledLabeledButton = styled(LabeledButton)`
  width: 80px;
  height: 60px;
  color: ${theme('titleText', defaultTheme.titleText)};
  background-color: ${theme('backgroundColor', defaultTheme.backgroundColor)};
`;

export default Container;
