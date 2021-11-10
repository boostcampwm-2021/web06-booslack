import React, { useState } from 'react';
import Label from '@atoms/Label';
import ViewportInput from '@atoms/ViewPortInput';
import { Container } from './styles';

interface Props {
  text: string;
  type?: string;
  placeholder?: string;
  onSubmit?: React.FormEventHandler;
  onChange?: React.FormEventHandler;
}

const QuestionForm = ({
  type,
  text,
  placeholder,
  onSubmit,
  onChange,
}: Props): JSX.Element => {
  return (
    <Container>
      <Label text={text} />
      <ViewportInput
        type={type}
        onSubmit={onSubmit}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Container>
  );
};

QuestionForm.defaultProps = {
  placeholder: '',
  type: 'text',
  onSubmit: () => {},
  onChange: () => {},
};

export default QuestionForm;
