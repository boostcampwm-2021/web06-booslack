import IconButton from '@atoms/IconButton';
import LabeledButton from '@atoms/LabeledButton';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 48.99px;
  width: ${({ width }) => {
    if (width) return `${width}vw`;
    else return 'inherit';
  }};

  justify-content: space-between;
  align-items: center;
  }
  background-color: #fff;

  & > * {
    margin: 0 1vw 0 1vw;
    
`;

export const StyledLabeledButton = styled(LabeledButton)`
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
