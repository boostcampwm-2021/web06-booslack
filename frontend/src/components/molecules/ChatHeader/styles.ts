import IconButton from '@atoms/IconButton';
import LabeledButton from '@atoms/LabeledButton';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 48.99px;
  align-items: center;
  }
  background-color: #fff;

  & > * {
    margin: 0 1vw 0 1vw;
  }
  
  --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
  box-shadow: 0 0 0 1px var(--saf-0), 0 4px 12px 0 rgba(0, 0, 0, 0.12);
`;

export const StyledLabeledButton = styled(LabeledButton)`
  font-size: 18px;
  font-weight: bold;
  &: hover {
    cursor: pointer;
    background-color: #f6f6f6;
  }
`;

export const StyledIconButton = styled(IconButton)`
  &: hover {
    cursor: pointer;
    background-color: #f6f6f6;
  }
`;
