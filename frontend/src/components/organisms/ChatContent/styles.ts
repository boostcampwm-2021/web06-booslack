import styled from 'styled-components';

interface Props {
  width?: string;
}

export const Container = styled.div<Props>`
  position: relative;
  height: inherit;
  min-height: 70vh;
  width: ${(props) => props.width ?? 'inherit'};
  background-color: grey;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export default Container;
