import styled from 'styled-components';
import IconButton from '@atoms/IconButton';
import LabeledButton from '@atoms/LabeledButton';

export const Container = styled.div`
  margin-bottom: 4px;
`;

export const ReactionAddButton = styled(IconButton)`
  margin-bottom: 4px;
  margin-right: 4px;
  line-height: 16px;
  vertical-align: top;
  background: rgba(var(--sk_foreground_min, 29, 28, 29), 0.04);
  border: none;
  border-radius: 12px;
  padding: 4px 6px;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  :hover {
    --saf-0: rgba(var(--sk_foreground_high, 29, 28, 29), 0.5);
    box-shadow: inset 0 0 0 1px var(--saf-0);
    background: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  }
`;

export const StyledLabeledButton = styled(LabeledButton)`
  margin-bottom: 4px;
  margin-right: 4px;
  background: rgba(var(--sk_foreground_min, 29, 28, 29), 0.04);
  border: none;
  border-radius: 12px;
  font-size: 11px;
  line-height: 16px;
  padding: 4px 6px;
  display: inline-flex;
  align-items: center;
  vertical-align: top;

  :hover {
    --saf-0: rgba(var(--sk_foreground_high, 29, 28, 29), 0.5);
    box-shadow: inset 0 0 0 1px var(--saf-0);
    background: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  }

  &.reacted {
    --saf-0: rgba(var(--sk_highlight_accent, 29, 155, 209), 1);
    box-shadow: inset 0 0 0 1px var(--saf-0);
    background: rgba(29, 155, 209, 0.1);
  }
`;
