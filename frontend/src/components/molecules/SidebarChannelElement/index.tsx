import Label from '@atoms/Label';
import React from 'react';
import { Container, StyledLabel } from './styles';

interface Props {
  onClick: () => void;
  label: string;
  isPrivate: boolean;
}

const SidebarChannelElement = ({
  onClick,
  label,
  isPrivate,
}: Props): JSX.Element => {
  return (
    <Container onClick={onClick}>
      <StyledLabel>
        <Label text={isPrivate ? '🔒' : '#'} />
      </StyledLabel>
      <Label text={label} />
    </Container>
  );
};

export default SidebarChannelElement;
