import React from 'react';
import Container from './styles';

interface Props {
  inputName?: string;
  width: number;
  height: number;
  onSubmit?: React.FormEventHandler;
  placeholder: string;
}

const ViewportInput = ({
  inputName,
  width,
  height,
  onSubmit,
  placeholder,
}: Props): JSX.Element => {
  return (
    <form onSubmit={onSubmit}>
      <Container
        name={inputName}
        width={width}
        height={height}
        placeholder={placeholder}
      />
    </form>
  );
};

ViewportInput.defaultProps = {
  inputName: '',
  onSubmit: () => {},
};

export default ViewportInput;
