import styled from 'styled-components';

interface Props {
  width: number;
  height: number;
}

export const Container = styled.div<Props>`
  position: relative;
  width: ${(props) => props.width}vw;
  height: ${(props) => props.height}vh;

  border: 0;
  margin: 0 1vw 0 1vw;
  background-color: brown;
`;

export default Container;
