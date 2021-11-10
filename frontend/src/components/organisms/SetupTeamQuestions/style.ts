import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  height: 95vh;
`;

export const MarginedDiv = styled.div`
  & > * {
    margin: 0 3px 0 10px;
  }
`;

export default Container;
