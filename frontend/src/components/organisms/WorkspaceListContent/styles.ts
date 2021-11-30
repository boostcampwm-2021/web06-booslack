import styled from 'styled-components';
import { theme } from 'styled-tools';
import { BeatLoader } from 'react-spinners';
import Label from '@atoms/Label';
import LabeledButton from '@atoms/LabeledButton';
import SelectWorkspace from '@molecules/SelectWorkspace';
import BrowseChannelHeader from '@molecules/BrowseChannelHeader';
import { defaultTheme } from '@global/theme';
import { flexAlignCenter, hoverChangeColor } from '@global/mixin';
import ImageBox from '@atoms/ImageBox';

export const StyledHeader = styled(BrowseChannelHeader)`
  min-width: 290px;
  width: 100%;
  padding: 0;

  background-color: ${theme('smallHeaderColor', defaultTheme.smallHeaderColor)};
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  z-index: -3;
`;

export const StyledHelloMessage = styled.div`
  margin-top: 23vh;
  margin-bottom: 5vh;

  width: 55vw;
  min-width: 300px;
  color: ${theme('titleText', defaultTheme.titleText)};
  background-color: transparent;
  text-aligns: center;
`;

export const HelloLabel = styled(Label)`
  font-size: calc(2rem + (12 * (100vw - 400px) / 624));
  font-weight: 900;
  line-height: 1.25;
  letter-spacing: 0.9px;
`;

export const Container = styled.main`
  position: relative;
  width: 55vw;
  min-width: 300px;
  background-color: #fff;

  border: 2px solid transparent;
  border-radius: 9px;
  position: relative;

  overflow-y: visible;

  margin-bottom: 30vh;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
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

export const StyledLabel = styled(Label)`
  min-width: 500px;
`;

export const StyledSelectWorkspace = styled(SelectWorkspace)``;

export const StyledLabeledButton = styled(LabeledButton)`
  width: 80px;
  height: 60px;
  color: ${theme('titleText', defaultTheme.titleText)};
  background-color: ${theme('backgroundColor', defaultTheme.backgroundColor)};

  &:hover {
    color: ${theme('backgroundColor', defaultTheme.backgroundColor)};
    background-color: ${theme('titleText', defaultTheme.titleText)};
  }
`;

export const SpinnerContainer = styled.div`
  width: 55vw;
  min-width: 300px;
  height: 60px;

  ${flexAlignCenter}
`;

export const LoadingSpinner = styled(BeatLoader)`
  background-color: ${theme('backgroundColor', defaultTheme.backgroundColor)};
`;

export const StyledImageBox = styled(ImageBox)`
  width: 100px;
  height: 100px;
  background-color: transparent;
`;

export default Container;
