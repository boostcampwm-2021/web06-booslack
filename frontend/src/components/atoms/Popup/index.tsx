import React from 'react';
import { ButtonSize } from '@enum/index';
import Container from './styles';

interface Props {
  row?: number;
  isOpen: boolean;
  children: JSX.Element | JSX.Element[];
  className: string;
}

const Popup = ({ isOpen, children, className }: Props): JSX.Element => {
  return (
    <Container visible={isOpen} className={className}>
      {children}
    </Container>
  );
};

export default Popup;
