import Input from '@atoms/Input';
import styled from 'styled-components';
import { RoundScrollBar } from '@global/mixin';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  height: 400px;
`;

export const StyledInput = styled(Input)`
  font-size: 100%;
  margin: 0 1rem;
`;

export const ScrollContainer = styled.div`
  ${RoundScrollBar};
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  overflow-y: scroll;
  overflow-x: hidden;
`;
