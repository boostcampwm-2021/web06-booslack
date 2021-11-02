import styled from 'styled-components';

interface Props {
  width: number;
  height: number;
  image: string;
}

const Container = styled.button<Props>`
  width: ${({ width }) => width ?? 50}px;
  height: ${({ height }) => height ?? 50}px;
  background-image: url(${({ image }) => image});
`;

export default Container;
