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
  onInput?: (e) => void;
}

const Input = ({
  onChange,
  name,
  value,
  onClick,
  type,
  checked,
  width,
  height,
  placeholder,
  className,
  onInput,
}: Props): JSX.Element => {
  return (
    <Container
      width={width}
      height={height}
      placeholder={placeholder}
      onChange={onChange}
      checked={checked}
      name={name}
      value={value}
      className={className}
      type={type}
      onInput={onInput}
    />
  );
};

export default Input;
