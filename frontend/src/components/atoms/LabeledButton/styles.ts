import styled from 'styled-components';

interface Props {
  width: number;
  height: number;
  color: string;
  backgroundColor: string;
}

const Container = styled.button<Props>`
  min-width: ${({ width }) => width ?? 50}px;
  min-height: ${({ height }) => height ?? 50}px;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export default Container;
