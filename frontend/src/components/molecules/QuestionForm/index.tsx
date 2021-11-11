import React, { useRef } from 'react';
import ViewportInput from '@atoms/ViewPortInput';
import { Container, StyledLabel, StyledLabeledDefaultButton } from './styles';

interface Props {
  count: string;
  title: string;
  content: string;
  type?: string;
  placeholder?: string;
  onSubmit?: React.FormEventHandler;
  onChange?: React.FormEventHandler;
  onSet: (arg0: { value: string } | { files: File }) => void;
}

const QuestionForm = ({
  count,
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
      <StyledLabel text={count} />
      <StyledLabel text={title} />
      <StyledLabel text={content} />
      <ViewportInput
        customRef={inputRef}
        type={type}
        onSubmit={onSubmit}
        onChange={onChange}
        placeholder={placeholder}
      />
      <StyledLabeledDefaultButton
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
