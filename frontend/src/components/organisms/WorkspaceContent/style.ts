import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 82vw;
  height: 95vh;
`;

export const MarginedDiv = styled.div`
  & > * {
    margin: 0 3px 0 10px;
  }
`;

export default Container;
