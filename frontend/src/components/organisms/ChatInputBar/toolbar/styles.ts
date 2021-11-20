import styled from 'styled-components';

export const Container = styled.div`
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: -1;

  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: 1px solid transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Container;
