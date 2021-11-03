import styled from 'styled-components';

interface Props {
  width?: string;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: row;
  min-height: 51.96px;
  width: ${(props) => props.width ?? 'inherit'};
  background-color: #eee;
`;

export const TextSet = styled.div`
  flex-direction: column;
`;
