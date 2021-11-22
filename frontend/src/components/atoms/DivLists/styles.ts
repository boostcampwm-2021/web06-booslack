import styled from 'styled-components';

const Container = styled.div`
  width: inherit;
  text-overflow: ellipsis;
  text-align: center;
  overflow: hidden;
  border-radius: 4px;
  margin: 5px 0 10px 0;
  padding: 3px;

  &:hover {
    background-color: #1164a3;
    cursor: pointer;
    color: #fff;
  }
`;

export default Container;
