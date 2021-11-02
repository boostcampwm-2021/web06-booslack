import styled from 'styled-components';

interface Props {
  width: number;
  height: number;
}

const Container = styled.button<Props>`
  background: transparent;
  border: 0px solid;
`;

export default Container;
