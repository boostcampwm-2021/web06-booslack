import styled from 'styled-components';

interface Props {
  width: number;
  height: number;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ivory;
  height: 36px;
  width: 100%;

  &: hover {
    cursor: pointer;
  } ;
`;

export const StyledLabel = styled.span<Props>`
  margin: 1rem;
`;
