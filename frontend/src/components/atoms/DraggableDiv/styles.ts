import styled from 'styled-components';

const Container = styled.div`
  height: 95vh;
  color: #f8f8f8;
  border-left: 2px solid #fff;
  border-right: 1.5px solid #f8f8f8;

  &: hover {
    cursor: -webkit-grabbing;
    cursor: -moz-grabbing;
    cursor: grabbing;
  }
`;

export default Container;
