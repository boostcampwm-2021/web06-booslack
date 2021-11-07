import React from 'react';
import Container from './styles';

interface Props {
  onClick: () => void;
  text: string;
  width?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
}

const LabeledButton = ({
  onClick,
  text,
  width,
  height,
  color,
  backgroundColor = 'transparent',
  className,
}: Props): JSX.Element => {
  return (
    <Container
      onClick={onClick}
      width={width}
      height={height}
      color={color}
      backgroundColor={backgroundColor}
      className={className}
    >
      {text}
    </Container>
  );
};

export default LabeledButton;
