import React, { RefObject } from 'react';
import Container from './styles';

interface Props {
  xWidth: number;
  yHeight: number;
  isOpened: boolean;
  children: JSX.Element;
  onClose: () => void;
  zIndex?: number;
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
  zIndex,
}: Props): JSX.Element => {
  return (
    <Container
      x={xWidth}
      y={yHeight}
      customRef={customRef}
      isOpen={isOpened}
      onClose={onClose}
      zIndex={zIndex}
      className={className}
    >
      {children}
    </Container>
  );
};

NoOverlayModal.defaultProps = {
  className: '',
  zIndex: 80,
};

export default NoOverlayModal;
