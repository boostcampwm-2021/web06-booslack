import React, { RefObject } from 'react';
import LabeledButton from '@atoms/LabeledButton';
import { BUTTON_SIZE } from '@enum/index';

interface Props<T> {
  onClick?: (e) => void;
  width?: number;
  height?: number;
  text: string;
  color?: string;
  backgroundColor?: string;
  className?: T;
  customRef?: RefObject<HTMLButtonElement>;
  disabled?: boolean;
}

const {
  width: ButtonWidth,
  height: ButtonHeight,
  color: ButtonColor,
  backgroundColor: ButtonBackground,
} = BUTTON_SIZE;

const LabeledDefaultButton = ({
  onClick,
  width,
  height,
  text,
  color,
  backgroundColor,
  className,
  customRef,
  disabled,
}: Props<typeof className>): JSX.Element => {
  return (
    <LabeledButton
      customRef={customRef}
      onClick={onClick}
      width={width}
      height={height}
      color={color}
      backgroundColor={backgroundColor}
      text={text}
      className={className}
      disabled={disabled}
    />
  );
};

LabeledDefaultButton.defaultProps = {
  onClick: (e) => {},
  width: ButtonWidth as number,
  height: ButtonHeight as number,
  color: ButtonColor,
  backgroundColor: ButtonBackground,
  className: {},
  customRef: undefined,
  disabled: false,
};

export default LabeledDefaultButton;
