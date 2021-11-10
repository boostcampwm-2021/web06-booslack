import React from 'react';
import Container from './styles';

interface Props {
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
