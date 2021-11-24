import styled from 'styled-components';
import BrowseChannelHeader from '@molecules/BrowseChannelHeader';
import Label from '@atoms/Label';
import ImageButton from '@atoms/ImageButton';

const Container = styled.div<{ widthVW: number; isOpened: boolean }>`
  display: ${({ isOpened }) => (isOpened ? 'flex' : 'none')};
  flex-direction: column;
  width: ${({ widthVW }) => widthVW}vw;
  height: 100vh;
  background-color: #fff;

  border-left: 1px solid #f8f8f8;
`;

export const StyledBrowseChannelHeader = styled(BrowseChannelHeader)`
  z-index: 5;
  --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
  box-shadow: 0 0 0 1px var(--saf-0), 0 4px 12px 0 rgba(0, 0, 0, 0.12);
`;

export const StyledLabel = styled(Label)`
  font-weight: bold;
`;

export const MarginDiv = styled.div`
  margin-top: 20vh;
`;

export const XImageButton = styled(ImageButton)`
  border-radius: 6px;
  &:hover {
    background-color: #f8f8f8;
  }
`;

export default Container;
