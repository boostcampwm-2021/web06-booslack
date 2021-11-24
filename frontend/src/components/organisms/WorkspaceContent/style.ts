import styled from 'styled-components';

export const Container = styled.div<{ WIDTHVW: number }>`
  display: flex;
  width: ${({ WIDTHVW }) => WIDTHVW}vw;
  height: 95vh;
  flex-direction: column;
`;

export const MarginedDiv = styled.div`
  & > * {
    margin: 0 3px 0 10px;
  }
`;

export default Container;
