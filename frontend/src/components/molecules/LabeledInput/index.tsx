import React from 'react';
import Label from '@atoms/Label';
import Input from '@atoms/Input';
import Container from './styles';

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
}: Props): JSX.Element => {
  return (
    <Container>
      <Label text={label} />
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
