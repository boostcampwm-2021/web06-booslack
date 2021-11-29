import styled from 'styled-components';
import { RoundScrollBar } from '@global/mixin';
import { BsSearch } from 'react-icons/bs';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  height: 400px;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledIconButton = styled(BsSearch)`
  margin-left: 12px;
`;

export const StyledInput = styled.input`
  font-size: 100%;
  width: 100%;
  height: 36px;
  margin: 0 1rem;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const ScrollContainer = styled.div`
  ${RoundScrollBar};
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  margin-top: 1rem;
  overflow-y: scroll;
  overflow-x: hidden;
`;
