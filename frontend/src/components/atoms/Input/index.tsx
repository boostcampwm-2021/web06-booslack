import React from 'react';
import Container from './styles';

interface Props {
  onChange: (e) => void;
  name: string;
  value: string;
  onClick?: () => void;
  onKeyDown?: () => void;
  width?: number;
  height?: number;
  placeholder: string;
}

const Input = ({
  onChange,
  name,
  value,
  onClick,
  onKeyDown,
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
      onKeyDown={onKeyDown}
      name={name}
      value={value}
      className={className}
    />
  );
};

export default Input;
