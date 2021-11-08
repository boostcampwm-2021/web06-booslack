import styled from 'styled-components';

interface Props {
  width: number;
  height: number;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: inherit;
  height: 10vh;

  align-items: center;
  border: 0;
  background-color: pink;
`;

export default Container;
