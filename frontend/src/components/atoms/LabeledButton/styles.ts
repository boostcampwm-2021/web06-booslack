import styled from 'styled-components';

interface Props {
  color: string;
  backgroundColor: string;
  disabled?: unknown;
}

const Container = styled.button<Props>`
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 0px;
  border-radius: 4px;
  cursor: pointer;
`;

export default Container;
