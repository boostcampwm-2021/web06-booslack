import styled from 'styled-components';

interface Props {
  width: number;
  height: number;
  color: string;
  backgroundColor: string;
}

const Container = styled.button<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};

  &: hover {
    cursor: pointer;
  }
`;

export default Container;
