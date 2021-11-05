import styled from 'styled-components';

interface Props {
  width: number;
  height: number;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 12px 24px;
`;
