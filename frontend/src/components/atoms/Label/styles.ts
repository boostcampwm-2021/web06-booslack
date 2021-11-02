import styled from 'styled-components';

interface Props {
  width: number;
  height: number;
  color: string;
  backgroundColor: string;
}

const Container = styled.span<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export default Container;
