import React from 'react';
import LabeledButton from '@atoms/LabeledButton';
import { ButtonSize } from '@enum/index';

interface Props {
  onClick?: () => void;
  width?: number;
  height?: number;
  text: string;
  color?: string;
  backgroundColor?: string;
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
}: Props): JSX.Element => {
  return (
    <LabeledButton
      onClick={onClick}
      width={width || (ButtonWidth as number)}
      height={height || (ButtonHeight as number)}
      color={color || ButtonColor}
      backgroundColor={backgroundColor || ButtonBackground}
      text={text}
      className={className}
    />
  );
};

export default LabeledDefaultButton;
