import BrowseChannelHeader from '@molecules/BrowseChannelHeader';
import LabeledButton from '@atoms/LabeledButton';
import styled from 'styled-components';

export const Container = styled.div<{ widthVW: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ widthVW }) => widthVW}vw;
  height: 95vh;
`;

export const StyledBrowseChannelHeader = styled(BrowseChannelHeader)`
  font-weight: bold;
`;

export const StyledLabeledButton = styled(LabeledButton)`
  transition: all 80ms linear;
  background: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  --saf-0: rgba(var(--sk_primary_foreground, 29, 28, 29), 0.3);
  border: 1px solid var(--saf-0);
  background-clip: padding-box;
  font-weight: 700;

  &:hover {
    background-color: #f8f8f8;
    text-decoration: none;
  }
`;

export default Container;
