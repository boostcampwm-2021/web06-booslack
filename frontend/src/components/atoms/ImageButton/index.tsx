import React, { RefObject } from 'react';
import { SetterOrUpdater } from 'recoil';
import Container from './styles';

interface Props {
  onClick: (e: React.MouseEvent<HTMLElement>) => void | SetterOrUpdater<any>;
  width?: number;
  height?: number;
  image: string;
  className?: string;
  customRef?: undefined | RefObject<HTMLButtonElement>;
}

const ImageButton = ({
  onClick,
  width,
  height,
  image,
  className,
  customRef,
}: Props): JSX.Element => {
  return (
    <Container
      ref={customRef}
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
  customRef: undefined,
};

export default ImageButton;
