import styled from 'styled-components';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import BrowseChannelHeader from '@molecules/BrowseChannelHeader';

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
`;

export default Container;
