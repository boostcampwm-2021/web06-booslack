import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Container, Content, Overlay } from './styles';

const root = document.getElementById('portal');

interface Props {
  isOpen: boolean;
  onClose: () => void;
  zIndex: number;
  children: ReactNode;
  className?: string;
}

const Modal = ({
  isOpen,
  onClose,
  zIndex = 100,
  children,
  className,
}: Props): JSX.Element => {
  return createPortal(
    <Container visible={isOpen}>
      <Overlay onClick={onClose} zIndex={zIndex} />
      <Content className={className} zIndex={zIndex}>
        {children}
      </Content>
    </Container>,
    root,
  );
};

export default Modal;
