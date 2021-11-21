import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  width: inherit;
  border: 0px solid;

  margin-top: 5vh;
`;

export const StyledButton = styled.button<{ isCursor: boolean }>`
  background: transparent;
  border: 0;

  margin: 0 1vw 0 1vw;
  width: 30px;
  height: 30px;

  color: ${({ isCursor }) => (isCursor ? 'red' : '')};

  &:hover {
    cursor: pointer;
  }
`;

export default Container;
