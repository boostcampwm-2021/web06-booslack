import styled from 'styled-components';

const Container = styled.div`
  width: inherit;
  text-overflow: ellipsis;
  text-align: center;
  overflow: hidden;

  margin: 5px 0 10px 0;

  &:hover {
    background-color: #1164a3;
    cursor: pointer;
  }
`;

export default Container;
