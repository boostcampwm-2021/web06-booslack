import React, { ChangeEvent } from 'react';

interface Props {
  name: string;
  value: number;
  isChecked?: number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const RadioButton = ({
  name,
  isChecked,
  onChange,
  value,
  className,
}: Props): JSX.Element => {
  return (
    <>
      <input
        type="radio"
        value={value}
        name={name}
        checked={value === isChecked}
        className={className}
        onChange={onChange}
      />
      {name}
    </>
  );
};

RadioButton.defaultProps = {
  className: '',
  isChecked: false,
  onChange: () => {},
};

export default RadioButton;
