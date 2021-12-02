import styled from 'styled-components';

interface Props {
  width: number;
  height: number;
  color?: string;
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
  flex-grow: 1;
  padding: 1rem;
  text-decoration: none;
  color: ${({ color }) => color};
`;

export const StyledIconButton = styled.div<Props>`
  border-radius: 1rem;
  right: 1rem;
  color: ${({ color }) => color};
`;
