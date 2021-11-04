import Label from '@atoms/Label';
import React from 'react';
import { Container, StyledLabel } from './styles';

interface Props {
  onClick: () => void;
  label: string;
}

const SidebarAddElement = ({ onClick, label }: Props): JSX.Element => {
  return (
    <Container onClick={onClick}>
      <StyledLabel>
        <Label text="+" />
      </StyledLabel>
      <Label text={label} />
    </Container>
  );
};

export default SidebarAddElement;
