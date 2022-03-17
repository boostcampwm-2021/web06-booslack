import styled from 'styled-components';
import { scrollIfHover } from '@global/style/mixin';
import BrowseChannelHeader from '@molecules/BrowseChannelHeader';

interface Props {
  width?: number;
}

export const Container = styled.div<Props>`
  display: flex;

  width: ${({ width }) => {
    if (width) return `${width}vw`;
    return '95%';
  }};
  min-width: 10vw;

  flex-direction: column;
`;

export const ScrollBox = styled.div<Props>`
  width: ${({ width }) => {
    if (width) return `${width}vw`;
    return 'inherit';
  }};
`;

export const MarginBottomDiv = styled.div`
  margin-bottom: 30vh;
`;

export const MarginBetweenMenuDiv = styled.div`
  margin-bottom: 2vh;
`;

export const CenterAlignedDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const ChannelListBackground = styled.div<Props>`
  height: 80vh;
  width: 100%;
  max-height: inherit;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${scrollIfHover}
`;

export const MarginedDiv = styled.div`
  display: flex;
  position: relative;

  & > button {
    margin: 0 5px 0 5px;
  }
`;

export const StyledBrowseChannelHeader = styled(BrowseChannelHeader)`
  --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
  border-bottom 1px solid rgba(0, 0, 0, 0.12);
`;

export default Container;
