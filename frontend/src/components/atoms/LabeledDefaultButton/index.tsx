import React from 'react';
import LabeledButton from '@atoms/LabeledButton';
import { ButtonSize } from '@enum/index';

interface Props {
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
  width,
  height,
  text,
  color,
  backgroundColor,
}: Props): JSX.Element => {
  return (
    <LabeledButton
      onClick={() => {}}
      width={width || (ButtonWidth as number)}
      height={height || (ButtonHeight as number)}
      color={color || ButtonColor}
      backgroundColor={backgroundColor || ButtonBackground}
      text={text}
    /> //나중바꿈
  );
};

export default LabeledDefaultButton;
