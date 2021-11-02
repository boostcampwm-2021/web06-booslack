import React from 'react';
import { ViewportContainer } from './styles';

interface Props {
  width: number;
  height: number;
  onClick?: () => void;
  placeholder: string;
}

const ViewportInput = ({
  width,
  height,
  onClick,
  placeholder,
}: Props): JSX.Element => {
  return (
    <ViewportContainer
      width={width}
      height={height}
      placeholder={placeholder}
    />
  );
};

export default ViewportInput;
