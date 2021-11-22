import React, { RefObject } from 'react';
import Container from './styles';

interface Props {
  xWidth: number;
  yHeight: number;
  isOpened: boolean;
  children: JSX.Element;
  onClose: () => void;
  customRef: RefObject<HTMLElement>;
  className?: string;
}

const NoOverlayModal = ({
  xWidth,
  yHeight,
  isOpened,
  onClose,
  customRef,
  children,
  className,
}: Props): JSX.Element => {
  return (
    <Container
      x={xWidth}
      y={yHeight}
      customRef={customRef}
      isOpen={isOpened}
      onClose={onClose}
      zIndex={90}
      className={className}
    >
      {children}
    </Container>
  );
};

export default NoOverlayModal;
