import styled from 'styled-components';

interface Props {
  width?: number;
  height?: number;
}

export const Container = styled.div<Props>`
  display: flex;
  width: ${({ width }) => {
    if (width) return `${width}vw`;
    else return 'inherit';
  }};
  height: ${({ height }) => {
    if (height) return `${height}vh`;
    else return 'inherit';
  }};
  justify-content: center;
  align-items: center;

  border: 0;
`;

export default Container;
