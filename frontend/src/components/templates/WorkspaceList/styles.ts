import styled from 'styled-components';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import Label from '@atoms/Label';
import BrowseChannelHeader from '@molecules/BrowseChannelHeader';
import { RoundScrollBar } from '@global/mixin';
import { defaultTheme } from '@global/theme';
import { theme } from 'styled-tools';

export const StyledLabeledButton = styled(LabeledDefaultButton)`
  border: 1 solid fff;
  color: ${theme('titleText', defaultTheme.titleText)};
  background-color: transparent;
`;

export const StyledHeader = styled(BrowseChannelHeader)`
  height: 8vh;
  background-color: transparent;
  color: ${theme('titleText', defaultTheme.titleText)};

  & > * {
    margin: 3vh 2vw 0 2vw;
  }
`;

export const StyledLabel = styled(Label)`
  font-weight: bold;
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${RoundScrollBar}
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const StyledMain = styled.main`
  width: 70vw;
  min-height: 50vh;
  background-color: #fff;
  margin-top: 30vh;
`;

export default Container;
