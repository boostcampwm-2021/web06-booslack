import styled from 'styled-components';

interface Props {
  width: number;
  height: number;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 36px;
  width: 100%;
  &: hover * {
    cursor: pointer;
  } ;
`;

export const StyledLabel = styled.span<Props>`
  color: orange;
  flex-grow: 1;
  padding: 1rem;
`;

export const StyledIconButton = styled.div<Props>`
  border-radius: 1rem;
  right: 1rem;
  &: hover {
    background-color: grey;
    opacity: 70%;
  }
`;
