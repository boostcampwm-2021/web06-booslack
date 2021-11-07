import React from 'react';
import { Container, ToggleOff, ToggleOn } from './styles';

interface Props {
  isOn: boolean;
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleButton = ({ isOn, setIsOn, className }: Props): JSX.Element => {
  return (
    <Container onClick={() => setIsOn((prevState) => !prevState)}>
      {isOn ? (
        <ToggleOn className={className} />
      ) : (
        <ToggleOff className={className} />
      )}
    </Container>
  );
};

export default ToggleButton;
