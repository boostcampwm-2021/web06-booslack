import styled from 'styled-components';
import { theme } from 'styled-tools';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import Label from '@atoms/Label';
import BrowseChannelHeader from '@molecules/BrowseChannelHeader';
import { RoundScrollBar, ThemeButton } from '@global/style/mixin';
import { defaultTheme } from '@global/style/theme';

export const StyledLabeledButton = styled(LabeledDefaultButton)`
  border: 1 solid fff;
  ${ThemeButton};

  font-weight: 400;
  line-height: 1.3;
  letter-spacing: normal;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.8rem;
  &:hover {
    text-decoration: underline;
  }
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
  font-size: 3rem;
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
