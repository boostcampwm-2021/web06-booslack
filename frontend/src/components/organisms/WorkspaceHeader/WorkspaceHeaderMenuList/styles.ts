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
  border-top: 1px solid rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
  border-bottom: 0;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin: 3px 0 3px 0;
`;

export default Container;
