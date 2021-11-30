import styled from 'styled-components';

interface Props {
  width: number;
  height: number;
}

const Container = styled.input<Props>`
  width: 100%;
  height: inherit;
`;

export const Form = styled.form`
  width: 100%;
`;

export default Container;
