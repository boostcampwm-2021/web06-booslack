import React from 'react';
import Container from './styles';

interface Props {
  onClick: () => void;
  width: number;
  height: number;
  color: string;
  backgroundColor: string;
}

const LabeledButton = ({
  onClick,
  width,
  height,
  color,
  backgroundColor,
}: Props): JSX.Element => {
  return (
    <Container
      onClick={onClick}
      width={width}
      height={height}
      color={color}
      backgroundColor={backgroundColor}
    />
  );
};

export default LabeledButton;
