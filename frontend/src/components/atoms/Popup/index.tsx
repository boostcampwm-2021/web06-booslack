import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Container, Content, Overlay } from './styles';

const root = document.getElementById('portal');

interface Props {
  row?: number;
  isOpen: boolean;
  onClose: () => void;
  zIndex: number;
  children: ReactNode;
  className?: string;
}

const Popup = ({
  isOpen,
  onClose,
  zIndex = 110,
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

export default Popup;
