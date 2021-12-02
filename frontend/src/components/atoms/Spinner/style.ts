import styled from 'styled-components';

export const Center = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 12px;
  padding: 12px;
`;

export const PacmanContainer = styled.div<{ size: number }>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${({ size }) => `${size * 2}px`};
  margin: 12px;
  padding: 12px;
`;

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 12px;
  padding: 12px;
  border: none;
`;
