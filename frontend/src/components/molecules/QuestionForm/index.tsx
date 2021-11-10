import React, { useRef } from 'react';
import Label from '@atoms/Label';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import ViewportInput from '@atoms/ViewPortInput';
import { Container } from './styles';

interface Props {
  title: string;
  content: string;
  type?: string;
  placeholder?: string;
  onSubmit?: React.FormEventHandler;
  onChange?: React.FormEventHandler;
  onSet: (arg0: { value: string } | { files: File }) => void;
}

const QuestionForm = ({
  type,
  title,
  content,
  placeholder,
  onSubmit,
  onChange,
  onSet,
}: Props): JSX.Element => {
  const inputRef = useRef();

  return (
    <Container>
      <Label text={title} />
      <br />
      <Label text={content} />
      <ViewportInput
        innerRef={inputRef}
        type={type}
        onSubmit={onSubmit}
        onChange={onChange}
        placeholder={placeholder}
      />
      <LabeledDefaultButton
        text="다음"
        onClick={() => {
          onSet(inputRef?.current);
        }}
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
