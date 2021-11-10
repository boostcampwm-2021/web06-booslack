import React from 'react';
import Container from './styles';

interface Props<T> {
  onClick: () => void;
  text: string;
  width?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
  className?: T;
}

const LabeledButton = ({
  onClick,
  text,
  width,
  height,
  color,
  backgroundColor = 'transparent',
  className,
}: Props<typeof className>): JSX.Element => {
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

LabeledButton.defaultProps = {
  className: {},
  width: 30,
  height: 30,
  color: undefined,
  backgroundColor: undefined,
};

export default LabeledButton;
