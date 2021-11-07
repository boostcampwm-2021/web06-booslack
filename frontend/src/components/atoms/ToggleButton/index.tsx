import React, { useState } from 'react';
import { Container, ToggleOff, ToggleOn } from './styles';

interface Props {
  onClick: () => void;
}

const ToggleButton = ({ onClick, className }: Props): JSX.Element => {
  const [isOn, setIsOn] = useState(false);

  return (
    <Container
      onClick={() =>
        setIsOn((prevState) => {
          onClick();
          return !prevState;
        })
      }
    >
      {isOn ? (
        <ToggleOn className={className} />
      ) : (
        <ToggleOff className={className} />
      )}
    </Container>
  );
};

export default ToggleButton;
