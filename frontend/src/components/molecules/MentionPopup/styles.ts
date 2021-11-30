import NoOverlayModal from '@molecules/NoOverlayModal';
import styled from 'styled-components';

export const StyledPopup = styled(NoOverlayModal)`
  --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
  box-shadow: 0 0 0 1px var(--saf-0), 0 4px 12px 0 rgba(0, 0, 0, 0.08);
  line-height: 1rem;
  position: fixed;
  background-color: white;

  width: 300px;
  height: 300px;
`;

export default StyledPopup;
