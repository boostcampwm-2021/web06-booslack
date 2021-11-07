import styled from 'styled-components';

interface Props {
  color: string;
  backgroundColor: string;
}

const Container = styled.button<Props>`
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 0px;
`;

export default Container;
