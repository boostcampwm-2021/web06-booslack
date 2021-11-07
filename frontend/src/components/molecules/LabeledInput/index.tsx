import React from 'react';
import Input from '@atoms/Input';
import Container, { StyledLabel } from './styles';

interface Props {
  onChange: (e) => void;
  name: string;
  value: string;
  label: string;
  placeholder?: string;
}

const LabeledInput = ({
  onChange,
  name,
  value,
  label,
  placeholder,
  className,
}: Props): JSX.Element => {
  return (
    <Container className={className}>
      <StyledLabel text={label} />
      <Input
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
      />
    </Container>
  );
};

export default LabeledInput;
