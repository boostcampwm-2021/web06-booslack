import React from 'react';
import { IconType } from 'react-icons';
import Container from './styles';

interface Props {
  onClick: () => void;
  width?: number;
  height?: number;
  icon: IconType;
}

const IconButton = ({ onClick, width, height, icon }: Props): JSX.Element => {
  const Icon = icon;
  return (
    <Container width={width} height={height} onClick={onClick}>
      <Icon />
    </Container>
  );
};

export default IconButton;
