/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import Container, { Form } from './styles';

interface Props {
  inputName?: string;
  onSubmit?: React.FormEventHandler;
  onChange?: React.FormEventHandler;
  placeholder: string;
  type?: string;
  customRef?: React.RefObject<HTMLInputElement>;
  className?: string;
}

const ViewportInput = ({
  inputName,
  onSubmit,
  onChange,
  type,
  placeholder,
  customRef,
  className,
}: Props): JSX.Element => {
  return (
    <Form onSubmit={onSubmit}>
      <Container
        // @ts-ignore
        ref={customRef}
        name={inputName}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        className={className}
      />
    </Form>
  );
};

ViewportInput.defaultProps = {
  inputName: '',
  onSubmit: () => {},
  onChange: () => {},
  type: 'text',
  customRef: undefined,
  className: '',
};

export default ViewportInput;
