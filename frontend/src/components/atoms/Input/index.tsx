import React from 'react';
import Container from './styles';

interface Props {
  onClick?: () => void;
  width?: number;
  height?: number;
  placeholder: string;
}

const Input = ({ onClick, width, height, placeholder }: Props): JSX.Element => {
  return <Container width={width} height={height} placeholder={placeholder} />;
};

export default Input;
