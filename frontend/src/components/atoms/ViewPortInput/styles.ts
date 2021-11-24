import styled from 'styled-components';

interface Props {
  width: number;
  height: number;
}

const Container = styled.input<Props>`
  width: ${({ width }) => {
    if (width) return `${width}vw`;
    return '100%';
  }};
  height: ${({ height }) => {
    if (height) return `${height}vh`;
    return 'inherit';
  }};
`;

export const Form = styled.form`
  width: 100%;
`;

export default Container;
