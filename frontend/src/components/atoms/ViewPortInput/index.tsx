import React from 'react';
import Container from './styles';

interface Props {
  width: number;
  height: number;
  onClick?: () => void;
  placeholder: string;
  flex?: boolean;
}

const ViewportInput = ({
  width,
  height,
  onClick,
  placeholder,
}: Props): JSX.Element => {
  return <Container width={width} height={height} placeholder={placeholder} />;
};

export default ViewportInput;
