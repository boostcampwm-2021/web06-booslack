import styled from 'styled-components';
import NoOverlayModal from '@molecules/NoOverlayModal';
import IconButton from '@atoms/IconButton';
import LabeledButton from '@atoms/LabeledButton';

export const StyledSearchModal = styled(NoOverlayModal)`
  width: 45vw;
  min-width: 450px;
  height: 250px;
  border: 1px solid #e2e2e2;
  box-shadow: 0 0 0 1px var(--saf-0), 0 4px 12px 0 rgba(0, 0, 0, 0.12);
  background-color: #ffffff;
  border-radius: 6px;
  padding: 0.1px 0;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
`;

export const StyledIconButton = styled(IconButton)`
  margin-left: 12px;
  margin-right: 12px;
  height: 24px;
`;

export const StyledLabeledButton = styled(LabeledButton)`
  font-size: 15px;
  color: #8e8e8e;
  padding-right: 12px;
  height: 24px;
  border-right: 1px solid #e2e2e2;
`;

export const StyledInput = styled.input`
  font-size: 15px;
  width: 40vw;
  min-width: 400px;
  height: 44px;
  padding: 8px 0;
  border: none;

  &::placeholder {
    // deep grey for placeholder
    color: #8e8e8e;
  }
  &:focus {
    outline: none;
  }
`;
