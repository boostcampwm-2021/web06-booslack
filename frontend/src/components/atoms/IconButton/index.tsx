import React, { RefObject } from 'react';
import { IconType } from 'react-icons';
import Container from './styles';

interface Props<T> {
  onClick: () => void;
  width?: number;
  height?: number;
  icon: IconType;
  className?: T;
  customRef?: undefined | RefObject<HTMLButtonElement>;
}

const IconButton = ({
  onClick,
  width,
  height,
  icon,
  className,
  customRef,
}: Props<typeof className>): JSX.Element => {
  const Icon = icon;
  return (
    <Container
      width={width}
      height={height}
      onClick={onClick}
      className={className}
      ref={customRef}
    >
      <Icon />
    </Container>
  );
};

IconButton.defaultProps = {
  className: {},
  width: 30,
  height: 30,
  customRef: undefined,
};

export default IconButton;
