import styled from 'styled-components';
import { hoverChangeColor } from '@global/style/mixin';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import Label from '@atoms/Label';

interface Props {
  width?: string;
}

export const Container = styled.div<Props>`
  display: flex;
  width: ${(props) => props.width ?? 'inherit'};
  flex-direction: column;

  & > * {
    margin: 1vh 1vw 0 0;
  }
`;

export const TextSet = styled.div`
  color: blue;
  & > span:not(:first-child) {
    margin: 1vh 1vw 0 1vw;
  }
`;

export const SpaceBetweenDiv = styled.div<Props>`
  display: flex;

  min-height: 51.96px;
  padding: 20px 3vw 20px 3vw;

  flex-direction: row;
  justify-content: space-between;

  border-bottom: 0.5px solid #dddddd;
  ${hoverChangeColor}

  &: first-child {
    border-top: 0.5px solid #dddddd;
  }
`;

export const MarginedDiv = styled.div`
  display: flex;
  min-width: 15vw;
  justify-content: space-evenly;
  & > button {
    margin-right: 1vw;
  }
`;

export const StyledLabel = styled(Label)`
  font-weight: bold;
`;

export const StyledJoinedNoticeLabel = styled(Label)`
  color: #007a5a;
`;

export const StyledButton = styled(LabeledDefaultButton)<{
  backgroundColor?: string;
}>`
  width: 90px;
  border-radius: 4px;
  align-items: center;
  position: relative;
  display: inline-flex;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;

  transition: all 80ms linear;
  background: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  background-color: ${({ backgroundColor }) => {
    return backgroundColor;
  }};
  border: 1px solid rgba(var(--sk_primary_foreground, 29, 28, 29), 0.3);
  background-clip: padding-box;
  font-weight: 700;
`;
