import IconButton from '@atoms/IconButton';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import Popup from '@atoms/Popup';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;

  & > button {
    margin: 0 5px 0 5px;
  }
`;

export const SortedPopup = styled(Popup)`
  background-color: ivory;
`;

export const StyledLabeledDefaultButton = styled(LabeledDefaultButton)`
  font-size: 16px;
  color: rgba(var(--sk_foreground_max, 29, 28, 29), 0.7);
  padding-left: 1px;
`;

export const StyledIconButton = styled(IconButton)`
  padding-right: 1px;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  font-weight: 400 !important;
  align-items: center;
  border-radius: 4px;
  padding: 0 8px;
  color: rgba(var(--sk_foreground_max, 29, 28, 29), 0.7);
  white-space: nowrap;

  &:hover {
    cursor: pointer;
  }
`;

export default Container;
