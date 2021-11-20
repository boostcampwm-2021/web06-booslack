import styled from 'styled-components';
import { hoverChangeColor } from '@global/mixin';

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
  & > span {
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
  min-width: 8vw;
  justify-content: space-evenly;
  & > button {
    margin-right: 2vw;
  }
`;
