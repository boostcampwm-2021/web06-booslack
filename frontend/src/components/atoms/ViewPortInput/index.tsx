/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import Container from './styles';

interface Props {
  inputName?: string;
  width?: number;
  height?: number;
  onSubmit?: React.FormEventHandler;
  onChange?: React.FormEventHandler;
  placeholder: string;
  type?: string;
  customRef?: React.RefObject<HTMLInputElement>;
}

const ViewportInput = ({
  inputName,
  width,
  height,
  onSubmit,
  onChange,
  type,
  placeholder,
  customRef,
}: Props): JSX.Element => {
  return (
    <form onSubmit={onSubmit}>
      <Container
        // @ts-ignore
        ref={customRef}
        name={inputName}
        width={width}
        height={height}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />
    </form>
  );
};

ViewportInput.defaultProps = {
  inputName: '',
  onSubmit: () => {},
  onChange: () => {},
  width: '',
  height: '',
  type: 'text',
  customRef: undefined,
};

export default ViewportInput;
