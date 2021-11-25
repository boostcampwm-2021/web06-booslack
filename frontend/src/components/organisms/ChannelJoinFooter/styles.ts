import LabeledButton from '@atoms/LabeledButton';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px 30px;
  background-color: rgba(var(--sk_foreground_min, 29, 28, 29), 0.04);
  text-align: center;
`;

export const PreviewSubtitle = styled.div`
  font-size: 18px;
  line-height: 1.33334;
  font-weight: 400;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  white-space: pre;
`;

export const PreviewMetadata = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
  margin-bottom: 20px;
`;

export const StyledLabeledButton = styled(LabeledButton)`
  font-size: 15px;
  height: 36px;
  min-width: 80px;
  padding: 0 12px 1px;

  &.primary {
    transition: all 80ms linear;
    background: #007a5a;
    color: #fff;
    font-weight: 900;
    box-shadow: none;
  }

  &.secondary {
    margin-left: 16px;
    color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
    background: rgba(var(--sk_primary_background, 255, 255, 255), 1);
    --saf-0: rgba(var(--sk_primary_foreground, 29, 28, 29), 0.3);
    border: 1px solid var(--saf-0);
    background-clip: padding-box;
    font-weight: 700;
  }
`;

export default Container;
