import React from 'react';
import Container from './styles';

interface Props {
  onClick: () => void;
  width: number;
  height: number;
  image: string;
}

const ImageButton = ({ onClick, width, height, image }: Props): JSX.Element => {
  return (
    <Container width={width} height={height} onClick={onClick} image={image} />
  );
};

export default ImageButton;
