import React from 'react';
import Label from '@atoms/Label';
import Input from '@atoms/Input';
import Container from './styles';

interface Props {
  label: string;
  placeholder?: string;
}

const LabeledInput = ({ label, placeholder }: Props): JSX.Element => {
  return (
    <Container>
      <Label text={label} />
      <Input placeholder={placeholder} />
    </Container>
  );
};

export default LabeledInput;
