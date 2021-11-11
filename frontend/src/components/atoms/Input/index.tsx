import React from 'react';
import Container from './styles';

interface Props<T> {
  onChange: (e) => void;
  name: string;
  value: string;
  onClick?: () => void;
  width?: number;
  height?: number;
  type?: string;
  placeholder: string;
  className?: T;
}

const Input = ({
  onChange,
  name,
  value,
  onClick,
  type,
  width,
  height,
  placeholder,
  className,
}: Props): JSX.Element => {
  return (
    <Container
      width={width}
      height={height}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
      className={className}
      type={type}
    />
  );
};

export default Input;
