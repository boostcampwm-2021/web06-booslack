import styled from 'styled-components';

interface Props {
  width: number;
  height: number;
  image: string;
}

const Container = styled.button<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-image: url(${({ image }) => image});
`;

export default Container;
