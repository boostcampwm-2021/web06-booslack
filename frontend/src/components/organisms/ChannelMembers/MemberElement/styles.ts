import Label from '@atoms/Label';
import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  &: hover {
    cursor: pointer;
    background-color: #f6f6f6;
  }
`;

export const Container = styled.div`
  padding: 1rem;
`;

export const StyledLabel = styled(Label)`
  padding-right: 1rem;
`;
