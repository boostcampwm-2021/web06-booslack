import React from 'react';
import LabeledButton from '@atoms/LabeledButton';
import { ButtonSize } from '@enum/index';

interface Props<T> {
  onClick?: () => void;
  width?: number;
  height?: number;
  text: string;
  color?: string;
  backgroundColor?: string;
  className?: T;
}

const {
  width: ButtonWidth,
  height: ButtonHeight,
  color: ButtonColor,
  backgroundColor: ButtonBackground,
} = ButtonSize;

const LabeledDefaultButton = ({
  onClick,
  width,
  height,
  text,
  color,
  backgroundColor,
  className,
}: Props<typeof className>): JSX.Element => {
  return (
    <LabeledButton
      onClick={onClick}
      width={width}
      height={height}
      color={color}
      backgroundColor={backgroundColor}
      text={text}
      className={className}
    />
  );
};

LabeledDefaultButton.defaultProps = {
  onClick: () => {},
  width: ButtonWidth as number,
  height: ButtonHeight as number,
  color: ButtonColor,
  backgroundColor: ButtonBackground,
  className: {},
};

export default LabeledDefaultButton;
