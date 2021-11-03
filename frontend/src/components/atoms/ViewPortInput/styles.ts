import styled from 'styled-components';

interface Props {
  width: number;
  height: number;
}

const Container = styled.input<Props>`
  width: ${({ width }) => width}vw;
  height: ${({ height }) => height}vh;
`;

export default Container;
