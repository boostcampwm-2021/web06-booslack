import React from 'react';
import Container from './styles';

interface Props {
  text: string;
  width?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
  className?: string;
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

Label.defaultProps = {
  className: '',
};

export default Label;
