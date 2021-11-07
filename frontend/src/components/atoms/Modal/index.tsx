import React from 'react';
import { createPortal } from 'react-dom';
import { Container, Overlay } from './styles';

const root = document.getElementById('portal');

const Modal = ({
  isOpen,
  onClose,
  children,
  className,
  zIndex = 100,
}): JSX.Element => {
  return createPortal(
    <>
      <Overlay visible={isOpen} onClick={onClose} zIndex={zIndex} />
      <Container visible={isOpen} className={className} zIndex={zIndex}>
        {children}
      </Container>
    </>,
    root,
  );
};

export default Modal;
