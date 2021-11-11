import React from 'react';
import Container from './styles';

interface Props {
  onClick: () => void;
  width?: number;
  height?: number;
  image: string;
  className?: string;
}

const ImageButton = ({
  onClick,
  width,
  height,
  image,
  className,
}: Props): JSX.Element => {
  return (
    <Container
      className={className}
      width={width}
      height={height}
      onClick={onClick}
      image={image}
    />
  );
};

ImageButton.defaultProps = {
  className: '',
  width: 30,
  height: 30,
};

export default ImageButton;
