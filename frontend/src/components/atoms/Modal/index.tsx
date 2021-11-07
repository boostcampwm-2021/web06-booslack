import React from 'react';
import { createPortal } from 'react-dom';
import { Container, Overlay } from './styles';

const root = document.getElementById('portal');

const Modal = ({ isOpen, onClose, children, className }): JSX.Element => {
  return createPortal(
    <>
      <Overlay visible={isOpen} onClick={onClose} />
      <Container visible={isOpen} className={className}>
        {children}
      </Container>
    </>,
    root,
  );
};

export default Modal;
