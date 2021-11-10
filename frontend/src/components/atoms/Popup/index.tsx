import React from 'react';
import { ButtonSize } from '@enum/index';
import Container from './styles';

interface Props {
  row?: number;
  isOpen: boolean;
  children: JSX.Element | JSX.Element[];
}

const { width: ButtonWidth } = ButtonSize;

const Popup = ({ row, isOpen, children }: Props): JSX.Element => {
  return (
    <Container row={row} visible={isOpen}>
      {children}
    </Container>
  );
};

Popup.defaultProps = {
  row: ButtonWidth,
};

export default Popup;
