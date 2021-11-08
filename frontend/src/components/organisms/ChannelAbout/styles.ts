import LabeledButton from '@atoms/LabeledButton';
import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  background-color: #f6f6f6;
`;

export const Container = styled.div`
  background-color: white;
  margin: 1rem;
  border: 1px solid #dddddd;
  border-radius: 1rem;
`;

export const StyledLabeledButton = styled(LabeledButton)`
  color: red;
  padding: 16px 20px;
`;
