import React from 'react';
import Container from './styles';

interface Props {
  onChange: (e) => void;
  name: string;
  value: string;
  onClick?: () => void;
  width?: number;
  height?: number;
  placeholder: string;
}

const Input = ({
  onChange,
  name,
  value,
  onClick,
  width,
  height,
  placeholder,
}: Props): JSX.Element => {
  return (
    <Container
      width={width}
      height={height}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
    />
  );
};

export default Input;
