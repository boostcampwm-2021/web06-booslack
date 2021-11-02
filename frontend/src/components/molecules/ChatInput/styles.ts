import styled from 'styled-components';

interface Props {
  width: number;
  height: number;
}

export const Container = styled.div<Props>`
  position: relative;
  width: ${(props) => props.width}vw;
  min-height: ${(props) => props.height}vh;

  border: 0;
  margin: 0px 1vw 10px 1vw;
  background-color: brown;
`;

export default Container;
