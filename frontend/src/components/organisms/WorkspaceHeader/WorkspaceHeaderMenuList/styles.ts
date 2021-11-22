import DivLists from '@atoms/DivLists';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
  align-items: center;
`;

export const RedDivLists = styled(DivLists)`
  color: red;
`;

export const GreyLine = styled.div`
  display: flex;
  width: inherit;
  height: 0.5px;
  border-bottom: 0.5px solid #dddddd;
  margin: 3px 0 3px 0;
`;

export default Container;
