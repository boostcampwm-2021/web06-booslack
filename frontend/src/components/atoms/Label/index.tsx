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
  height = 30,
  color,
  backgroundColor,
}: Props): JSX.Element => {
  return (
    <Container
      width={width}
      height={height}
      color={color}
      backgroundColor={backgroundColor}
    >
      {text}
    </Container>
  );
};

export default Label;
