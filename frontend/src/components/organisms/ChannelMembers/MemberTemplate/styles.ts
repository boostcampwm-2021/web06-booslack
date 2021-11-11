import styled from 'styled-components';
import Label from '@atoms/Label';

export const Container = styled.div`
  height: 100%;
`;

export const StyledLabel = styled(Label)`
  padding: 0 1rem;
  font-size: 14px;
  font-weight: 700;
  color: #616061;
`;

export const GreyContainer = styled.div`
  background-color: #f6f6f6;
  height: 100%;
`;

export const NoResultLabel = styled(Label)`
  padding: 1rem;
  font-weight: 700;
`;
