import styled from 'styled-components';

interface Props {
  width: number;
  height: number;
}

export const Container = styled.div<Props>`
  position: absolute;
  bottom: 0vh;
  width: inherit;
  min-height: ${(props) => props.height}vh;

  border: 0;

  background-color: white;
`;

export default Container;
