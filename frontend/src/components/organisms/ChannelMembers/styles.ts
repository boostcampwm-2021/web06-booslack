import Input from '@atoms/Input';
import styled from 'styled-components';
import { RoundScrollBar } from '@global/mixin';
import Label from '@atoms/Label';
import Autocomplete from '@atoms/Autocomplete';

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
  flex: 1 1 0;
  flex-direction: column;
  margin-top: 1rem;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const StyledLabel = styled(Label)`
  padding: 0 1rem;
  font-size: 14px;
  font-weight: 700;
  color: #616061;
`;

export const FilteredContainer = styled.div`
  height: 100%;
`;

export const GreyContainer = styled.div`
  background-color: #f6f6f6;
  height: 100%;
`;

export const NoResultLabel = styled(Label)`
  text-align: center;
  padding: 1rem;
  font-weight: 700;
`;

export const StyledAutocomplete = styled(Autocomplete)`
  height: 100%;
`;
