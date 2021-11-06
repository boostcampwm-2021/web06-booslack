import React from 'react';
import Container from './styles';

interface Props {
  isOpen: boolean;
  children: JSX.Element | JSX.Element[];
}

const Popup = ({ isOpen, children }: Props): JSX.Element => {
  return <Container visible={isOpen}>{children}</Container>;
};

export default Popup;
