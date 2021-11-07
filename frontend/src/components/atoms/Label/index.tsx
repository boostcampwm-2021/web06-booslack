import React from 'react';
import Container from './styles';

interface Props {
  text: string;
  width?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
}

const Label = ({
  text,
  width,
  height,
  color,
  backgroundColor,
  className,
}: Props): JSX.Element => {
  return (
    <Container
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

export default Label;
