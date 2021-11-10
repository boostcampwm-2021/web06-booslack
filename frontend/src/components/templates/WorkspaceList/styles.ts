import styled from 'styled-components';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import BrowseChannelHeader from '@molecules/BrowseChannelHeader';
import { RoundScrollBar } from '@global/mixin';

export const StyledLabeledButton = styled(LabeledDefaultButton)`
  border: 1 solid fff;
`;

export const StyledHeader = styled(BrowseChannelHeader)``;

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
