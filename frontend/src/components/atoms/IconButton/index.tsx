import React, { RefObject } from 'react';
import { IconType } from 'react-icons';
import Container from './styles';

interface Props<T> {
  onClick: () => void;
  icon: IconType;
  className?: T;
  customRef?: undefined | RefObject<HTMLButtonElement>;
  fontSize?: number;
  width?: number;
  height?: number;
}

const IconButton = ({
  onClick,
  icon,
  className,
  customRef,
  fontSize,
  width,
  height,
}: Props<typeof className>): JSX.Element => {
  const Icon = icon;
  return (
    <Container
      onClick={onClick}
      className={className}
      ref={customRef}
      width={width}
      height={height}
    >
      <Icon size={fontSize} />
    </Container>
  );
};

IconButton.defaultProps = {
  className: {},
  customRef: undefined,
  fontSize: 18,
  width: 30,
  height: 30,
};

export default IconButton;
