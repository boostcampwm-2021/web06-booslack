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
}

const ViewportInput = ({
  inputName,
  width,
  height,
  onSubmit,
  onChange,
  type,
  placeholder,
}: Props): JSX.Element => {
  return (
    <form onSubmit={onSubmit}>
      <Container
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
};

export default ViewportInput;
