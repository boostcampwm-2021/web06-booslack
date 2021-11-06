import Popup from '@atoms/Popup';
import { ButtonSize } from '@enum/index';
import { RoundScrollBar } from '@global/mixin';
import styled from 'styled-components';

interface Props {
  width?: number;
}

export const Container = styled.div<Props>`
  display: flex;

  width: ${({ width }) => {
    if (width) return `${width}vw`;
    return 'inherit';
  }};
  flex-direction: column;
`;

export const ScrollBox = styled.div<Props>`
  width: ${({ width }) => {
    if (width) return `${width}vw`;
    return 'inherit';
  }};
`;

export const MarginBottomDiv = styled.div<{ margin?: number }>`
  margin-bottom: ${({ margin }) => margin || 2}vh;
`;

export const CenterAlignedDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ChannelListBackground = styled.div<Props>`
  height: 80vh;
  max-height: inherit;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${RoundScrollBar}
  overflow: scroll;
  overflow-x: hidden;
`;

export const MarginedDiv = styled.div`
  display: flex;
  position: relative;

  & > button {
    margin: 0 5px 0 5px;
  }
`;

const {
  width: ButtonWidth,
  height: ButtonHeight,
  color: ButtonColor,
  backgroundColor: ButtonBackground,
} = ButtonSize;

export const SortedPopup = styled(Popup)`
  background-color: ivory;
`;

export default Container;
