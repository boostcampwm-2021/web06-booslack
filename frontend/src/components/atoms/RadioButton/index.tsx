import React from 'react';

interface Props {
  name: string;
  isChecked?: boolean;
  onChange?: () => void;
  className?: string;
}

const RadioButton = ({
  name,
  isChecked,
  onChange,
  className,
}: Props): JSX.Element => {
  return (
    <>
      <input
        type="radio"
        value={name}
        name={name}
        checked={isChecked}
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
