import React from 'react';
import Container from './styles';

interface Props<T> {
  image: string;
  className?: T;
}

const ImageBox = ({
  image,
  className,
}: Props<typeof className>): JSX.Element => {
  return <Container alt="image" src={image} className={className} />;
};

ImageBox.defaultProps = {
  className: {},
};

export default ImageBox;
