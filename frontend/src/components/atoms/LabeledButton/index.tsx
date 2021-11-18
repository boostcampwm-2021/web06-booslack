import React, { RefObject } from 'react';
import Container from './styles';

interface Props<T> {
  onClick: () => void | React.FormEventHandler<Element>;
  text: string;
  width?: number;
  height?: number;
  color?: string;
  type?: string | undefined;
  backgroundColor?: string;
  className?: T;
  customRef?: undefined | RefObject<HTMLButtonElement>;
  disabled?: boolean;
}

const LabeledButton = ({
  onClick,
  text,
  width,
  height,
  color,
  type,
  backgroundColor = 'transparent',
  className,
  customRef,
  disabled,
}: Props<typeof className>): JSX.Element => {
  return (
    <Container
      onClick={onClick}
      width={width}
      height={height}
      color={color}
      ref={customRef}
      backgroundColor={backgroundColor}
      className={className}
      disabled={disabled}
      type={type}
    >
      {text}
    </Container>
  );
};

LabeledButton.defaultProps = {
  className: {},
  width: 30,
  height: 30,
  color: undefined,
  backgroundColor: undefined,
  customRef: undefined,
  disabled: false,
};

export default LabeledButton;
