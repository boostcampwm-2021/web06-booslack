import React from 'react';
import { IconType } from 'react-icons';
import Container from './styles';

interface Props<T> {
  onClick: () => void;
  width?: number;
  height?: number;
  icon: IconType;
  className?: T;
}

const IconButton = ({
  onClick,
  width,
  height,
  icon,
  className,
}: Props<typeof className>): JSX.Element => {
  const Icon = icon;
  return (
    <Container
      width={width}
      height={height}
      onClick={onClick}
      className={className}
    >
      <Icon />
    </Container>
  );
};

IconButton.defaultProps = {
  className: {},
};

export default IconButton;
