import Input from '@atoms/Input';
import NoOverlayModal from '@molecules/NoOverlayModal';
import styled from 'styled-components';

export const StyledPopup = styled(NoOverlayModal)`
  --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
  box-shadow: 0 0 0 1px var(--saf-0), 0 4px 12px 0 rgba(0, 0, 0, 0.08);
  line-height: 1rem;

  width: 300px;
  width: 361px;
  border-radius: 6px;
  background: rgba(var(--sk_primary_background, 255, 255, 255), 1);
`;

export const InputContainer = styled.div`
  background: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 14px;
  position: relative;
`;

export const StyledInput = styled(Input)`
  padding-top: 2px;
  padding-bottom: 4px;
  padding-left: 30px;
  padding-right: 32px;
  font-size: 16px;
  margin: 0;
  height: 32px;
  width: 100%;
  border-radius: 4px;
  outline: none;
  --saf-0: rgba(var(--sk_primary_foreground, 29, 28, 29), 0.3);
  border: 1px solid var(--saf-0);
  line-height: normal;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
`;

export default StyledPopup;
