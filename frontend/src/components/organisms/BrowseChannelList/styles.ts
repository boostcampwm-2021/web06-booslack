import { RoundScrollBar } from '@global/mixin';
import styled from 'styled-components';

interface Props {
  width?: number;
}

export const Container = styled.div<Props>`
  width: ${({ width }) => {
    if (width) return `${width}vw`;
    return 'inherit';
  }};

  ${RoundScrollBar}
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const MarginBottomDiv = styled.div<{ margin?: number }>`
  margin-bottom: ${({ margin }) => margin || 2}vh;
`;

export const CenterAlignedDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ChannelListBackground = styled.div<Props>`
  height: inherit;
  min-height: 78vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MarginedDiv = styled.div`
  & > button {
    margin: 0 5px 0 5px;
  }
`;

export default Container;
